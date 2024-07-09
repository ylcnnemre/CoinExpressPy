import { v4 } from "uuid"
import amqp from "amqplib"
import { rabbitConnect } from "../config/RabbitMqConnection";
import { connectRedis } from "../config/RedisConnect";

async function sendToQueue(message: any, queue: string) {
    const connection = await rabbitConnect()
    const channel = await connection.createChannel();
    console.log("mess", message)
    const redis = connectRedis()
    const correlationId = v4();

    let keyv1 = `strId${message.id}`
    const keyControl = await redis.get(keyv1)
    /* await redis.del("strId52") */
    if (keyControl) {
        return Promise.resolve(JSON.stringify({
            "error": false,
            "status": "pending"
        }))
    }
    await redis.set(keyv1, message.id, "EX", 600)
    const responseQueue = await channel.assertQueue('', { exclusive: true });
    /* await redis.expire(`strId-${message.id.toString()}`, 20) */
    return new Promise((resolve, reject) => {

        channel.consume(responseQueue.queue, (msg: any) => {
            if (msg.properties.correlationId === correlationId) {
                resolve(msg.content.toString());
                setTimeout(() => {
                    connection.close();
                }, 500);
            }
        }, { noAck: true });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
            correlationId: correlationId,
            replyTo: responseQueue.queue
        });

    });
}


export {
    sendToQueue
}