import mongoose from "mongoose";
import { dockerConfig, isLocal, localConfig } from "../constant/devConfig";

const dev = isLocal ? localConfig : dockerConfig

const connectDb = () => {
    const username = process.env.MONGO_INITDB_ROOT_USERNAME; // .env dosyasındaki değeri kullanın
    const password = process.env.MONGO_INITDB_ROOT_PASSWORD; // .env dosyasındaki değeri kullanın
    const dbName = 'coindb';
    console.log("username => ", username, password)
    const mongoURL = `mongodb://${username}:${password}@${dev.mongo}:27017/${dbName}?authSource=admin`;
    mongoose.connect(mongoURL)
        .then(() => {
            console.log('MongoDB\'ye başarıyla bağlandı.');
        })
        .catch((error) => {
            console.error('MongoDB bağlantısı başarısız:', error);
        });
}

export {
    connectDb
}