import amqp from "amqplib"
import { connectRedis } from "./RedisConnect";
import { dockerConfig, isLocal, localConfig } from "../constant/devConfig";

function waitForTwentySeconds(wait: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${wait} seconds have passed`);
        }, wait); // 20 seconds = 20000 milliseconds
    });
}

const rabbitControl = async () => {
    try {
        const devType = isLocal ? localConfig : dockerConfig
        await waitForTwentySeconds(5)
        const connection = await amqp.connect({
            hostname: devType.rabbit,
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

const redisControl = () => {
    const redis = connectRedis()
    redis.on("connect", () => {
        console.log("redis bağlantısı başarılı")
    })
    redis.on('error', (err) => {
        console.error('Redis bağlantı hatası:', err);
    });
}


export {
    rabbitControl,
    redisControl
}