import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import { BaseException } from "./exception/BaseException"
import { indicatorRouter } from "./router/İndicatorRouter"
import { connectDb } from "./config/db"
import { connectRedis } from "./config/RedisConnect"
import path from "path"
import { rabbitControl, redisControl } from "./config/TestConnection"

dotenv.config()
const app = express()
app.use(express.json())

app.use('/static', express.static(path.join(__dirname, 'public')));


app.use("/api", indicatorRouter)

app.get("/", async (req, res) => {
    const redis = connectRedis()
    /* 
        const response = await redis.set("aa", "tesRed") */
    const cevap = await redis.get("aa")
    res.json({
        message: "server is running",
        redisTest: cevap
    })
})






app.use((err: BaseException, req: Request, res: Response, next: NextFunction) => {
    console.error(err.name);
    console.log("err => ", err)
    res.status(err.statusCode ?? 500).json({
        message: err.message,
        errors: err.data
    });
});







app.listen(5000, () => {
    connectDb()
    rabbitControl()
    redisControl()
    console.log("server is running")
})


