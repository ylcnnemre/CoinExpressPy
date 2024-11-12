import { Request, Response } from "express"
import { AllCoinPrice, calculatePhaseData, CoinPrices, CoinTicker, ConvertTime } from "../services/BinanceService"
import { getMoonPhase } from "../services/MoonPhase"
import { connectRedis } from "../config/RedisConnect"
import { ema, sma } from "indicatorts"


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
    const response = await AllCoinPrice({
        coinLimit: 100,
        klineLimit: 500
    })
    let test = response.map((item: any) => {
        const close = item.klineInfo.map((el: any) => parseFloat(el[4]))
        const sma500 = sma(close, {
            period: 500
        })
        const sma200 = sma(close, {
            period: 200
        })
        const sma100 = sma(close, {
            period: 100
        })
        const sma50 = sma(close, {
            period: 50
        })

        const ema50 = ema(close, {
            period: 50
        })
        const ema100 = ema(close, {
            period: 100
        })
        const ema200 = ema(close, {
            period: 200
        })
        const ema500 = ema(close, {
            period: 500
        })


        return {
            name: item.name,
            sma: {
                sma50: sma50.slice(-3),
                sma100: sma100.slice(-3),
                sma200: sma200.slice(-3),
                sma500: sma500.slice(-3),
            },
            ema: {
                ema50: ema50.slice(-3),
                ema100: ema100.slice(-3),
                ema200: ema200.slice(-3),
                ema500: ema500.slice(-3)
            }
        }
    })
    return res.json({
        length: test.length,
        data: test,
    })
}


export {
    GetCryptoMoonController,
    GetCryptoMovingAverage
}