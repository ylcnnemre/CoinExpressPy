import amqp from "amqplib"
import { dockerConfig, isLocal, localConfig } from "../constant/devConfig";


const dev = isLocal ? localConfig : dockerConfig

const rabbitConnect = async () => {
    try {
        const connection = await amqp.connect(`amqp://guest:12345*x@${dev.rabbit}`)
        console.log('RabbitMQ bağlantısı başarıyla sağlandı.');
        return connection
    }
    catch (error: any) {
        console.error('RabbitMQ bağlantı hatası:', error?.message);
    }

}

export {
    rabbitConnect
}