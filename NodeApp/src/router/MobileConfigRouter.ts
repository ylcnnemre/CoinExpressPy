import express from "express"
import { TabModel } from "../models"
import { SuccessResponseDto } from "../dto/ResponseMessageDto"
import { mobileIndicatorList } from "../constant/indicatorList"
const ConfigRouter = express.Router()

ConfigRouter.get("/", async (req, res) => {
    const response = await TabModel.findAll()
    return res.status(200).send(new SuccessResponseDto("Başarılı", response))
})

ConfigRouter.get("/indicators", (req, res) => {
    const responseDto = new SuccessResponseDto()
    responseDto.data = mobileIndicatorList
    responseDto.message = "success"

    return res.json(responseDto)
})

ConfigRouter.get("/sort/:id", (req, res) => {

    if (req.params.id == "stock") {
        const sortList = [
            {
                "name": "değişime göre",
                "value": "change",
            },
            {
                name: "hacime göre",
                value: "volume"
            },
            {
                name: "Piyasa değerine göre",
                value: "market_cap_basic"
            }
        ]
        const sortType = [
            {
                "label": "Yüksekten düşüğe",
                "value": false
            },
            {
                "label": "Düşükten yükseğe",
                "value": true
            }
        ]

        return res.json({
            sortList,
            sortType
        })
    }
    else {
        const sortList = [
            {
                "name": "değişime göre",
                "value": "change",
            },
            {
                "name": "dolar bazlı hacime göre",
                "value": "24h_vol|5"
            },
            {
                name: "hacime göre",
                value: "volume"
            },

        ]
        const sortType = [
            {
                "label": "Yüksekten düşüğe",
                "value": false
            },
            {
                "label": "Düşükten yükseğe",
                "value": true
            }
        ]

        return res.json({
            sortList,
            sortType
        })
    }

})

export {
    ConfigRouter
}