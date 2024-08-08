
interface IConfig {
    redisHost: string
    mongo: string
    rabbit: string
    type: "local" | "docker"
}

const isLocal: boolean = true

const dockerConfig: IConfig = {
    redisHost: "redis",
    mongo: "mongodb",
    rabbit: "rabbitmq",
    type: "docker"
}

const localConfig: IConfig = {
    redisHost: "localhost",
    mongo: "localhost",
    rabbit: "localhost",
    type: "local"
}

export {
    localConfig,
    dockerConfig,
    isLocal
}