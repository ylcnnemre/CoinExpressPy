import IoRedis from "ioredis"
import { dockerConfig, isLocal, localConfig } from "../constant/devConfig"


const devType = isLocal ? localConfig : dockerConfig


const connectRedis = () => {
    const redis = new IoRedis({
        host: devType.redisHost,
        port: devType.type == "docker" ? 6379 : 5679,
        password: "mypassword*1xw",

    })

    return redis
}
export {
    connectRedis
}