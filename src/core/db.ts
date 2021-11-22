import * as mongoose from "mongoose";
import { DB } from "../configs/db.config";
import { message } from "../configs/messages";
import { MongoConnection } from "../types";
import { StartCounting } from "./cronjob";

export const MongoSetup = async (): Promise<MongoConnection> => {
    try {
        await mongoose.connect(DB.DB_URL, { dbName: DB.DB_NAME });
        console.log(message.db.connection_success);
        mongoose.Promise = global.Promise;
        StartCounting()
        return {
            message: message.db.connection_success,
            success: true
        }
    } catch (error) {
        console.log(message.db.connection_falied);
        return {
            message: message.db.connection_falied,
            success: false
        };
    }
}