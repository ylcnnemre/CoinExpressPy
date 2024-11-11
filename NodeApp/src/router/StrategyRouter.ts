import Express from "express"
import { tarama_listesi } from "../constant/StrategyList"
import { sendToQueue } from "../services/SendToQueue"

const StrategyRouter = Express.Router()

StrategyRouter.post("/", async (req, res) => {
    const response: any = await sendToQueue(
        req.body, "strategies_select"
    )
    console.log("resppss", response)
    const parsedData = JSON.parse(response)
    return res.json(parsedData)
})

StrategyRouter.get("/", (req, res) => {
    return res.json({
        data: tarama_listesi
    })
})

export {
    StrategyRouter
}