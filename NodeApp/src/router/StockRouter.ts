import express from "express"
import { getIndicatorListControllre, getStrategiesListController, indicatorFilterController } from "../controller/İndicatorController"
import { tarama_listesi } from "../constant/StrategyList"
import { connectRedis } from "../config/RedisConnect"


const StockRouter = express.Router()

StockRouter.post("/", indicatorFilterController)


StockRouter.post("/key", async (req, res) => {
    const { key } = req.body
    if (key == "flushxtr") {
        const redis = connectRedis()
        await redis.flushall()
        res.json({
            message: "bütün cachelar silindi"
        })
    }
    else {
        res.status(400).json({
            message: "Key bulunamadı"
        })
    }
})

StockRouter.get("/test", (req, res) => {

    return res.json({
        message: "server is running"
    })
})


export {
    StockRouter 
}