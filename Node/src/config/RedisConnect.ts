import IoRedis from "ioredis"

const connectRedis=()=>{
   const redis = new IoRedis({
        host : "redis",
        port : 6379,
        password : "mypassword*1xw",
    
   })

   return redis
}
export {
    connectRedis
}