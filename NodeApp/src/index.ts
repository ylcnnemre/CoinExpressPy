import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import "./models/index"
import dotenv from "dotenv"
import { BaseException } from "./exception/BaseException"
import {  StockRouter } from "./router/StockRouter"
import { syncDatabase, testConnection } from "./config/db"
import { connectRedis } from "./config/RedisConnect"
import path from "path"
import { rabbitControl, redisControl } from "./config/TestConnection"
import { ConfigRouter } from "./router/MobileConfigRouter"
import { CryptoRouter } from "./router/CryptoRouter"
import { StrategyRouter } from "./router/StrategyRouter"

dotenv.config()
const app = express()
app.use(express.json())

app.use('/static', express.static(path.join(__dirname, 'public')));


app.use("/api/stock", StockRouter)
app.use("/api/config", ConfigRouter)
app.use("/api/crypto", CryptoRouter)
app.use("/api/strategies", StrategyRouter)

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

app.get("/tex", (req, res) => {
    const person: any = {
        name: "Alice",
        age: 25
    };

    console.log(person.address.street);

    res.send("selam")
})



app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BaseException) {
        return res.status(err.statusCode).json({
            message: err.message,
            data: err.data
        })
    }
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message
    });
})

/* app.use((err: BaseException, req: Request, res: Response, next: NextFunction) => {
    console.error(err.name);
    console.log("err => ", err)
    res.status(err.statusCode ?? 500).json({
        message: err.message,
        errors: err.data
    });
});
 */






app.listen(5000, () => {
    testConnection()
    syncDatabase()
    rabbitControl()
    redisControl()
    console.log("server is running")
})


