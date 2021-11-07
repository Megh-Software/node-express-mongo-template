import 'dotenv/config'

export const DB = {
    DB_URL: process.env.DB_URL || "localhost",
    DB_USER_NAME: process.env.DB_USER_NAME || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_NAME: process.env.DB_NAME || "node-startter",
}