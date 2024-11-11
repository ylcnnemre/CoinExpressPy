import express, { Request, Response } from "express"
import { sendToQueue } from "../services/SendToQueue";
import { GetCryptoMoonController, GetCryptoMovingAverage } from "../controller/CryptoController";

const CryptoRouter = express.Router()

CryptoRouter.post("/", async (req: Request, res: Response) => {
    const body = {
        ...req.body,
        market: "crypto"
    }
    const response: any = await sendToQueue(body, "crypto_queue");
    const parsedData = JSON.parse(response)
    return res.json(parsedData)
})

CryptoRouter.get("/moon", GetCryptoMoonController)
CryptoRouter.get("/ma",GetCryptoMovingAverage)

CryptoRouter.get("/test", (req, res) => {
    res.json({
        msg: "test crypto"
    })
})

export {
    CryptoRouter
}