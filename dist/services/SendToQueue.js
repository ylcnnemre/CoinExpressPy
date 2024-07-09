"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToQueue = sendToQueue;
const uuid_1 = require("uuid");
const RabbitMqConnection_1 = require("../config/RabbitMqConnection");
const RedisConnect_1 = require("../config/RedisConnect");
function sendToQueue(message, queue) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, RabbitMqConnection_1.rabbitConnect)();
        const channel = yield connection.createChannel();
        console.log("mess", message);
        const redis = (0, RedisConnect_1.connectRedis)();
        const correlationId = (0, uuid_1.v4)();
        let keyv1 = `strId${message.id}`;
        const keyControl = yield redis.get(keyv1);
        /* await redis.del("strId52") */
        if (keyControl) {
            return Promise.resolve(JSON.stringify({
                "error": false,
                "status": "pending"
            }));
        }
        yield redis.set(keyv1, message.id, "EX", 600);
        const responseQueue = yield channel.assertQueue('', { exclusive: true });
        /* await redis.expire(`strId-${message.id.toString()}`, 20) */
        return new Promise((resolve, reject) => {
            channel.consume(responseQueue.queue, (msg) => {
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
    });
}
