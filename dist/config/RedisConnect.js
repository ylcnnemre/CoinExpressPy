"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const connectRedis = () => {
    const redis = new ioredis_1.default({
        host: "localhost",
        port: 5679,
        password: "mypassword*1xw",
    });
    return redis;
};
exports.connectRedis = connectRedis;
