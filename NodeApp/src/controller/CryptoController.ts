import { Request, Response } from "express"
import { CoinPrices, CoinTicker, ConvertTime } from "../services/BinanceService"



const GetCryptoPriceController = async (req: Request, res: Response) => {
    const symbolList = await CoinTicker()

    const result = await Promise.all(
        symbolList.slice(0, 20).map(el => {
            return CoinPrices({ symbol: el.symbol, interval: "1d", limit: 200 })
        }))

    res.json({
        length: result.length,
        data: result
    })
}


export {
    GetCryptoPriceController
}