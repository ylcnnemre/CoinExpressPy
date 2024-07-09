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
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const _ndicatorRouter_1 = require("./router/\u0130ndicatorRouter");
const db_1 = require("./config/db");
const RedisConnect_1 = require("./config/RedisConnect");
const amqplib_1 = __importDefault(require("amqplib"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", _ndicatorRouter_1.indicatorRouter);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const redis = (0, RedisConnect_1.connectRedis)();
    const response = yield redis.set("aa", "tesRed");
    const cevap = yield redis.get("aa");
    res.send(cevap);
}));
app.use((err, req, res, next) => {
    var _a;
    console.error(err.name);
    console.log("err => ", err);
    res.status((_a = err.statusCode) !== null && _a !== void 0 ? _a : 500).json({
        message: err.message,
        errors: err.data
    });
});
app.get("/", (req, res) => {
    res.send("selam");
});
const rabbitControl = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield amqplib_1.default.connect({
            hostname: "rabbitmq",
            port: 5672,
            username: "guest",
            password: "12345*x"
        });
        console.log("connection", connection);
        console.log("rabbit bağlandı");
    }
    catch (err) {
        console.log("tavşan hata verdi => ", err.message);
    }
});
app.listen(5000, () => {
    const redis = (0, RedisConnect_1.connectRedis)();
    redis.on("connect", () => {
        console.log("redis bağlantısı başarılı");
    });
    redis.on('error', (err) => {
        console.error('Redis bağlantı hatası:', err);
    });
    /* rabbitControl() */
    (0, db_1.connectDb)();
    rabbitControl();
    console.log("server is running");
});
