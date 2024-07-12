import { Request, Response, json } from "express"
import { sendToQueue } from "../services/SendToQueue"
import { connectRedis } from "../config/RedisConnect"
import { BaseResponseMessageDto } from "../dto/ResponseMessageDto"
import { mobileIndicatorList } from "../constant/indicatorList"


const indicatorFilterController = async (req: Request, res: Response) => {
    console.log("reqq", req.body)
    const response: any = await sendToQueue(
        req.body, "rpc_queue",
    )
    const parsedData = JSON.parse(response)
    return res.json(parsedData)
}

const getIndicatorListControllre = (req: Request, res: Response) => {
    const responseDto = new BaseResponseMessageDto()
    responseDto.data = mobileIndicatorList
    responseDto.message = "success"

    return res.json(responseDto)
}

export const getStrategiesListController = async (req: Request, res: Response) => {
    console.log("req", req.body)
    const response: any = await sendToQueue(
        req.body, "strategies_select"
    )
    console.log("resppss", response)
    const parsedData = JSON.parse(response)
    return res.json(parsedData)
}


export {
    indicatorFilterController,
    getIndicatorListControllre
}