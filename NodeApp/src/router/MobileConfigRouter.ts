import express from "express"
import { TabModel } from "../models"
import { SuccessResponseDto } from "../dto/ResponseMessageDto"
const ConfigRouter = express.Router()

ConfigRouter.get("/", async (req, res) => {

    const response = await TabModel.findAll()

    return res.status(200).send(new SuccessResponseDto("Başarılı", response))

})


export {
    ConfigRouter
}