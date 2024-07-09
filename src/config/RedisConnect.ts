import IoRedis from "ioredis"

const connectRedis=()=>{
   const redis = new IoRedis({
        host : "localhost",
        port : 5679,
        password : "mypassword*1xw",
    
   })

   return redis
}
export {
    connectRedis
}