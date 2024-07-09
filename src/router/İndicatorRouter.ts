import express from "express"
import { getIndicatorListControllre, getStrategiesListController, indicatorFilterController } from "../controller/İndicatorController"
import { tarama_listesi } from "../constant/StrategyList"


const indicatorRouter = express.Router()

indicatorRouter.post("/", indicatorFilterController)

indicatorRouter.get("/indicatorList", getIndicatorListControllre)

indicatorRouter.post("/strategies", getStrategiesListController)

indicatorRouter.get("/strategies", (req, res) => {
    return res.json({
        data: tarama_listesi
    })
})

export {
    indicatorRouter
}