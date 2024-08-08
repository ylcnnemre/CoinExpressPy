import axios from "axios"
import { getMoonPhase } from "./MoonPhase"
import { format } from "date-fns"
const axiosInstance = axios.create({
    baseURL: "https://api.binance.com"
})

interface IRequestType {
    symbol: string
    interval: "1d" | "4h" | "1h" | "30m" | "15m"
    limit: 50 | 100 | 200 | 500
}

const CoinPrices = async (params: IRequestType = { symbol: "BTCUSDT", interval: "1d", limit: 200 }): Promise<{
    symbol: string,
    prices: Array<any>
}> => {
    const response = await axiosInstance.get(`/api/v3/klines?symbol=${params.symbol}&interval=${params.interval}&limit=${params.limit}`)
    const mainData: Array<Array<any>> = response.data
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
            const formatted = new Date(format(dateObject, "dd.MM.yyyy"))
            return {
                "time": time,
                "open": item[1],
                "close": item[4],
                "volume": item[5],
                "moonPhase": getMoonPhase(dateObject)
            }

        }
    })
    return {
        symbol: params.symbol,
        prices: formatData
    }
}

const ConvertTime = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
}

const CoinTicker = async (): Promise<Array<{ symbol: string, baseAsset: string, quoteAsset: string }>> => {

    const response = await axiosInstance.get("/api/v3/exchangeInfo")
    const forbiddenList = ["USDC", "TUSD", "PAX", "BUSD", "EUR", "ETHBULL", "ETHBEAR","BCHABC","BCHSV",
        "EOSBULL", "EOSBEAR", "XRPBEAR", "XRPBULL", "BNBBULL",
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

