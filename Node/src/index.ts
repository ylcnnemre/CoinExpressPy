import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import { BaseException } from "./exception/BaseException"
import { indicatorRouter } from "./router/İndicatorRouter"
import { connectDb } from "./config/db"
import { connectRedis } from "./config/RedisConnect"
import { rabbitConnect } from "./config/RabbitMqConnection"
import amqp from "amqplib"
dotenv.config()
const app = express()
app.use(express.json())

app.use("/api", indicatorRouter)

app.get("/", async (req, res) => {
    const redis = connectRedis()

    const response = await redis.set("aa", "tesRed")
    const cevap = await redis.get("aa")
    res.send(cevap)
})




app.use((err: BaseException, req: Request, res: Response, next: NextFunction) => {
    console.error(err.name);
    console.log("err => ", err)
    res.status(err.statusCode ?? 500).json({
        message: err.message,
        errors: err.data
    });
});


app.get("/", (req, res) => {
    res.send("selam")
})

const rabbitControl = async () => {
    try {
        const connection = await amqp.connect({
            hostname: "rabbitmq",
            port: 5672,
            username: "guest",
            password: "12345*x"
        })
        console.log("rabbit bağlandı")
    }
    catch (err: any) {
        console.log("tavşan hata verdi => ", err.message)
    }

}


app.listen(5000, () => {
    const redis = connectRedis()
    redis.on("connect", () => {
        console.log("redis bağlantısı başarılı")
    })
    redis.on('error', (err) => {
        console.error('Redis bağlantı hatası:', err);
    });
    connectDb()
    rabbitControl()
    console.log("server is running")
})
