import { Request, Response } from "express";
import { CoinPrices } from "../services/BinanceService";
import { SuccessResponseDto } from "../dto/ResponseMessageDto";
import axx from "date-fns"

const CryptoPriceListCalculator = async (req: Request, res: Response) => {
    const { symbol, interval, limit } = req.body
    const response: Array<Array<any>> = await CoinPrices({
        interval: interval ?? "1d",
        limit: limit ?? 200,
        symbol: symbol ?? "BTCUSDT"
    })
    response?.map(el => {
        el[0] = new Date(el[0])
        el[6] = new Date(el[6])
    })

    return res.json(new SuccessResponseDto("success", response))

}


export {
    CryptoPriceListCalculator
}