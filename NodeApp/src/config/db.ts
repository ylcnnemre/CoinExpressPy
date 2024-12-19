import mongoose from "mongoose";
import { dockerConfig, isLocal, localConfig } from "../constant/devConfig";
import { Sequelize } from "sequelize";


const dev = isLocal ? localConfig : dockerConfig

const sequelize = new Sequelize("mydatabase", "root", "1234abcDn", {
    host: dev.postgres,
    dialect: "postgres",
    port: 5432
})


async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log("connection successfull")
    }
    catch (err) {
        console.error("unable to connect", err)
    }
    finally {
        /* await sequelize.close() */
    }
}

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log("senkronizasyon tamam")
    } catch (error) {
        console.error('Error syncing the database:', error);
    } finally {
        /* await sequelize.close(); */
    }
}




export {
    testConnection,
    syncDatabase,
    sequelize,
    
}