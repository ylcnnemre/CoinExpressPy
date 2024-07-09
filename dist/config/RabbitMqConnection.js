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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitConnect = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const rabbitConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield amqplib_1.default.connect("amqp://guest:12345*x@rabbitmq");
        console.log('RabbitMQ bağlantısı başarıyla sağlandı.');
        return connection;
    }
    catch (error) {
        console.error('RabbitMQ bağlantı hatası:', error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.rabbitConnect = rabbitConnect;
