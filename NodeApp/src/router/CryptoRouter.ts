import express, { Request, Response } from "express"
import { sendToQueue } from "../services/SendToQueue";
const CryptoRouter = express.Router()


CryptoRouter.post("/", async (req: Request, res: Response) => {
    console.log("asdasd", req.body)
    const body = {
        ...req.body,
        market: "crypto"
    }
    const response: any = await sendToQueue(body, "crypto_queue");
    const parsedData = JSON.parse(response)
    return res.json(parsedData)
})


CryptoRouter.get("/test", (req, res) => {
    res.json({
        msg: "test crypto"
    })
})

export {
    CryptoRouter
}