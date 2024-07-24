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




function waitForTwentySeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("20 seconds have passed");
        }, 20000); // 20 seconds = 20000 milliseconds
    });
}

const rabbitControl = async () => {
    try {
        await waitForTwentySeconds()
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


/* server {
    listen 80;
    server_name kodafor.com www.kodafor.com;

    location / {
        proxy_pass http://localhost:5000;  # Node.js uygulamanızın çalıştığı port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://localhost:8000;  # Python uygulamanızın çalıştığı port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 443 ssl;
    server_name kodafor.com www.kodafor.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
 */