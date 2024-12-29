import express from "express"
import { sendToQueue } from "../services/SendToQueue"
import { v4 } from "uuid"
const SummaryRouter = express.Router()

SummaryRouter.post("/", async (req, res) => {
    const correlationId = v4();
    const body = { 
        id : correlationId,
        ...req.body
    }
    const response:any = await sendToQueue(body, "stock_summary", 200)
    const parsedData = JSON.parse(response)
    return res.json({
        data : parsedData
    })
})

export {
    SummaryRouter
}