import axios from "axios"
import { getMoonPhase, phaseCalculator } from "./MoonPhase"
import { format } from "date-fns"
import { getDay } from "./DateService"
import { connectRedis } from "../config/RedisConnect"
const axiosInstance = axios.create({
    baseURL: "https://api.binance.com"
})

interface IRequestType {
    symbol: string
    interval: "1d" | "4h" | "1h" | "30m" | "15m"
    limit: 50 | 100 | 200 | 500
}

function calculatePercentageChange(openPrice: number, closePrice: number): number {
    return ((closePrice - openPrice) / openPrice) * 100;
}


const calculatePhaseData = (mainData: Array<any>, interval: IRequestType["interval"]) => {

    const todayPhase = getMoonPhase(new Date())
    let phaseResult: Array<{
        phase: string,
        result: {
            negative: {
                count: number
                avaragePercent: any
            },
            positive: {
                count: number,
                avaragePercent: any
            }
        }
    }> = []

    mainData.map(item => {
        let time = ConvertTime(item[0])
        if (interval !== "1d") {
            return {
                "time": time,
                "open": item[1],
                "close": item[4],
                "volume": item[5],
            }
        }
        else {
            const dateObject = new Date(item[0]);
            let todayPhase = getMoonPhase(dateObject)
            /*  let dateToDay = getDay(dateObject) */

            if (item[4] > item[1]) {
                let control = phaseResult.findIndex(item => item.phase == todayPhase)
                let changePercent = calculatePercentageChange(item[1], item[4])
                if (control !== -1) {
                    const positiveCount = phaseResult[control].result.positive.count + 1;
                    const newPositiveAvg = ((phaseResult[control].result.positive.avaragePercent * phaseResult[control].result.positive.count) + changePercent) / positiveCount;
                    phaseResult[control].result.positive.count = positiveCount;
                    phaseResult[control].result.positive.avaragePercent = newPositiveAvg;
                }
                else {

                    phaseResult.push({
                        phase: todayPhase,
                        result: {
                            negative: {
                                count: 0,
                                avaragePercent: 0
                            },
                            positive: {
                                count: 1,
                                avaragePercent: changePercent
                            }
                        }
                    })
                }

            }
            else {
                let control = phaseResult.findIndex(item => item.phase == todayPhase)
                let changePercent = calculatePercentageChange(item[1], item[4])
                if (control !== -1) {
                    const negativeCount = phaseResult[control].result.negative.count + 1;
                    const newNegativeAvg = ((phaseResult[control].result.negative.avaragePercent * phaseResult[control].result.negative.count) + changePercent) / negativeCount;
                    phaseResult[control].result.negative.count = negativeCount;
                    phaseResult[control].result.negative.avaragePercent = newNegativeAvg;
                }
                else {
                    phaseResult.push({
                        phase: todayPhase,
                        result: {
                            negative: {
                                count: 1,
                                avaragePercent: changePercent
                            },
                            positive: {
                                count: 0,
                                avaragePercent: 0
                            }
                        }
                    })
                }
            }
            return {
                "time": time,
                "open": item[1],
                "close": item[4],
                "volume": item[5],
                "phase": todayPhase
            }

        }
    })

    const todayPhaseResult = phaseResult.filter(el => el?.phase == todayPhase)

    return {
        phaseResult,
        todayPhase: {
            date: new Date().toISOString(),
            phase: todayPhase,
            todayPhaseResult: todayPhaseResult[0]
        }
    }
}


const CoinPrices = async (params: IRequestType = { symbol: "BTCUSDT", interval: "1d", limit: 200 }) => {
    const response = await axiosInstance.get(`/api/v3/klines?symbol=${params.symbol}&interval=${params.interval}&limit=${params.limit}`)
    const mainData: Array<Array<any>> = response.data
    return mainData
}


const AllCoinPrice = async ({ coinLimit = 100, klineLimit = 200 }: { coinLimit?: number, klineLimit?: IRequestType["limit"] }) => {
    const redis = connectRedis()
    const allCoinCache = await redis.get("all-coin-price")
    if (allCoinCache) {
        return JSON.parse(allCoinCache)
    }
    else {
        const symbolList = await CoinTicker()
        const response = await Promise.all(
            symbolList.slice(0, coinLimit).map(el => {
                return CoinPrices({
                    interval: "1d",
                    limit: klineLimit,
                    symbol: el.symbol
                }).then(val => {
                    return {
                        name: el.symbol,
                        klineInfo: val,
                    }
                })
            })
        )
        redis.set("all-coin-price", JSON.stringify(response), "EX", 300)
        return response
    }

}


const ConvertTime = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
}

const CoinTicker = async (): Promise<Array<{ symbol: string, baseAsset: string, quoteAsset: string }>> => {

    const response = await axiosInstance.get("/api/v3/exchangeInfo")
    const forbiddenList = ["USDC", "TUSD", "PAX", "BUSD", "EUR", "ETHBULL", "YFIDOWNUSDT", "YFIUPUSDT", "ETHBEAR", "BCHABC", "BCHSV", "BCHDOWNUSDT", "BCHUPUSDT",
        "EOSBULL", "EOSBEAR", "XRPBEAR", "XRPBULL", "BNBBULL", "BCHUPUSDT", "BCHDOWNUSDT",
        "BNBBEAR", "BNBUP", "BNBDOWN", "BTCUP", "BTCDOWN", "ETHUP", "ETHDOWN", "ADADOWN", "ADAUP", "LINKUP", "LINKDOWN", "GBP", "DOTUP", "DOTDOWN", "LTCUP", "LTCDOWN",
        "FILDOWNUSDT", "FILUPUSDT", "YFIUPUSDT", "YFIDOWNUSDT", "BCHDOWNUSDT", "BCHUPUSDT", "SXPDOWNUSDT", "SXPUPUSDT", "UNIDOWNUSDT", "UNIUPUSDT", "XRPDOWNUSDT", "XRPUPUSDT",
        "TRXDOWNUSDT", "TRXUPUSDT", "EOSDOWNUSDT", "EOSUPUSDT", "XTZDOWNUSDT", "XTZUPUSDT", "TVKUSDT", "AUTOUSDT", "REEFUSDT", "SUSHIDOWNUSDT", "SUSHIUPUSDT",
        "XEMUSDT", "ORNUSDT", "HNTUSDT", "LTCDOWNUSDT", "LTCUPUSDT", "DOTDOWNUSDT", "OCEANUSDT", "BNBUPUSDT", "BNBDOWNUSDT", "LINKDOWNUSDT", "LINKUPUSDT", "ETHUPUSDT", "ETHDOWNUSDT", "BTCUPUSDT",
        "WTCUSDT", "XRPBULLUSDT", "ETHBULLUSDT", "DREPUSDT", "MCOUSDT", "DOCKUSDT", "MFTUSDT", "NPXUSDT", "ERDUSDT", "XMRUSDT"
    ]

    let tickers = response.data.symbols.filter((item: any) => {
        return item.quoteAsset == "USDT" && !forbiddenList.includes(item.symbol)
    }).map((el: any) => {
        return {
            "symbol": el.symbol,
            "baseAsset": el.baseAsset,
            "quoteAsset": el.quoteAsset,

        }
    })
    return tickers
}


export {
    CoinPrices,
    ConvertTime,
    CoinTicker,
    calculatePhaseData,
    AllCoinPrice
}

