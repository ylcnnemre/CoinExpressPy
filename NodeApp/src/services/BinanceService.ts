import axios from "axios"
import { getMoonPhase, phaseCalculator } from "./MoonPhase"
import { format } from "date-fns"
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

const CoinPrices = async (params: IRequestType = { symbol: "BTCUSDT", interval: "1d", limit: 200 }): Promise<{
    symbol: string,
    phaseResult: Array<any>
    prices: Array<any>
}> => {
    const response = await axiosInstance.get(`/api/v3/klines?symbol=${params.symbol}&interval=${params.interval}&limit=${params.limit}`)
    const mainData: Array<Array<any>> = response.data
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
    let formatData = mainData.map(item => {
        let time = ConvertTime(item[0])
        if (params.interval !== "1d") {
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
    return {
        symbol: params.symbol,
        phaseResult: phaseResult,
        prices: []
        /*  prices: formatData */
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
        "BNBBEAR", "BNBUP", "BNBDOWN", "BTCUP", "BTCDOWN", "ETHUP", "ETHDOWN", "ADADOWN", "ADAUP", "LINKUP", "LINKDOWN", "GBP", "DOTUP", "DOTDOWN", "LTCUP", "LTCDOWN"
    ]

    let tickers = response.data.symbols.filter((item: any) => {
        return item.quoteAsset == "USDT" && !forbiddenList.includes(item.baseAsset)
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
    CoinTicker
}

