
interface IConfig {
    redisHost: string
    postgres: string
    rabbit: string
    type: "local" | "docker"
}

const isLocal: boolean = false

const dockerConfig: IConfig = {
    redisHost: "redis",
    postgres: "postgresql",
    rabbit: "rabbitmq",
    type: "docker"
}

const localConfig: IConfig = {
    redisHost: "localhost",
    postgres: "localhost",
    rabbit: "localhost",
    type: "local"
}

export {
    localConfig,
    dockerConfig,
    isLocal
}