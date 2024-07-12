import amqp from "amqplib"

const rabbitConnect = async () => {
    try {
        const connection = await amqp.connect("amqp://guest:12345*x@rabbitmq")
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