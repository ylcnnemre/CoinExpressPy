"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitConnect = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const rabbitConnect = () => {
    const connection = amqplib_1.default.connect("amqp://guest:12345*x@localhost");
    return connection;
};
exports.rabbitConnect = rabbitConnect;
