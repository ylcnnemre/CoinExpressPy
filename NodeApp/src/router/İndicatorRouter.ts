import express from "express"
import { getIndicatorListControllre, getStrategiesListController, indicatorFilterController } from "../controller/İndicatorController"
import { tarama_listesi } from "../constant/StrategyList"
import { connectRedis } from "../config/RedisConnect"
import { GetCryptoPriceController } from "../controller/CryptoController"


const indicatorRouter = express.Router()

indicatorRouter.post("/", indicatorFilterController)

indicatorRouter.get("/indicatorList", getIndicatorListControllre)

indicatorRouter.post("/strategies", getStrategiesListController)

indicatorRouter.get("/strategies", (req, res) => {
    return res.json({
        data: tarama_listesi
    })
})

indicatorRouter.get("/crypto",GetCryptoPriceController)


indicatorRouter.post("/key", async (req, res) => {
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

indicatorRouter.get("/test", (req, res) => {

    return res.json({
        message: "server is running"
    })
})


export {
    indicatorRouter
}