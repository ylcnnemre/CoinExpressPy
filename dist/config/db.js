"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = () => {
    const username = process.env.MONGO_INITDB_ROOT_USERNAME; // .env dosyasındaki değeri kullanın
    const password = process.env.MONGO_INITDB_ROOT_PASSWORD; // .env dosyasındaki değeri kullanın
    const dbName = 'coindb';
    console.log("username => ", username, password);
    const mongoURL = `mongodb://${username}:${password}@mongodb:27017/${dbName}?authSource=admin`;
    mongoose_1.default.connect(mongoURL)
        .then(() => {
        console.log('MongoDB\'ye başarıyla bağlandı.');
    })
        .catch((error) => {
        console.error('MongoDB bağlantısı başarısız:', error);
    });
};
exports.connectDb = connectDb;
