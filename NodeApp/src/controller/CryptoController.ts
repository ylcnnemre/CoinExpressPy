import { Request, Response } from "express"
import { calculatePhaseData, CoinPrices, CoinTicker, ConvertTime } from "../services/BinanceService"
import { getMoonPhase } from "../services/MoonPhase"
import { connectRedis } from "../config/RedisConnect"
import { sma } from "indicatorts"


const GetCryptoMoonController = async (req: Request, res: Response) => {

    const redis = connectRedis()
    const redisData = await redis.get("moon-crypto")
    if (redisData) {
        const result = JSON.parse(redisData)
        return res.json({
            length: result.length,
            data: result
        })

    }
    else {
        const symbolList = await CoinTicker()
        const result = await Promise.all(
            symbolList.slice(0, 300).map(el => {
                return CoinPrices({ symbol: el.symbol, interval: "1d", limit: 200 }).then(val => {
                    const { phaseResult, todayPhase } = calculatePhaseData(val, "1d")
                    return {
                        symbol: el.symbol,
                        todayPhase: todayPhase,
                        phaseResult: phaseResult,
                        prices: []
                    }
                })

            }).reverse())

        redis.set("moon-crypto", JSON.stringify(result), "EX", 30)
        /*  const temps = result.filter(el => {
             const { todayPhase, ...rest } = el
             const { todayPhaseResult, ...rest2 } = todayPhase
     
             return todayPhaseResult?.result?.negative?.count < todayPhaseResult?.result?.positive?.count
         }) */

        res.json({
            length: result.length,
            data: result
        })

    }


}

const GetCryptoMovingAverage = async (req: Request, res: Response) => {
    const symbolList = await CoinTicker()
    const response = await Promise.all(
        symbolList.slice(0, 10).map(el => {
            return CoinPrices({
                interval: "1d",
                limit: 100,
                symbol: el.symbol
            }).then(val => {
                return {
                    name: el.symbol,
                    klineInfo: val,

                }
            })
        })
    )
    let test = response.map(item => {
        const close = item.klineInfo.map(el => el[4])
        const smaRes = sma(close, {
            period: 50
        })
        return {
            name: item.name,
            sma50: smaRes,
            prices: close

        }
    })
    return res.json({
        leng: symbolList.length,
        data: test,

    })
}


export {
    GetCryptoMoonController,
    GetCryptoMovingAverage
}