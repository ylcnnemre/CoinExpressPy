import axios from "axios"

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
        return {
            "time": ConvertTime(item[0]),
            "open": item[1],
            "close": item[4],
            "volume": item[5]
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
    const forbiddenList = ["USDC", "TUSD", "PAX", "BUSD", "EUR", "ETHBULL", "ETHBEAR",
        "EOSBULL", "EOSBEAR", "XRPBEAR", "XRPBULL", "BNBBULL",
        "BNBBEAR", "BNBUP", "BNBDOWN", "BTCUP", "BTCDOWN", "ETHUP", "ETHDOWN", "ADADOWN", "ADAUP", "LINKUP", "LINKDOWN", "GBP", "DOTUP", "DOTDOWN", "LTCUP", "LTCDOWN"
    ]

    let tickers = response.data.symbols.filter((item: any) => {
        return item.quoteAsset == "USDT" && !forbiddenList.includes(item.baseAsset)
    }).map((el: any) => {
        return {
            "symbol": el.symbol,
            "baseAsset": el.baseAsset,
            "quoteAsset": el.quoteAsset
        }
    })
    return tickers
}


export {
    CoinPrices,
    ConvertTime,
    CoinTicker
}

