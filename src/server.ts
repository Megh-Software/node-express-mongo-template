import { initApp } from "./app";
import { message } from "./configs/messages";
import { MongoSetup } from "./core/db";
import { MongoConnection } from "./types";
import dotenv from 'dotenv';
import path from "path"
dotenv.config({ path: path.join(__dirname, '.env') });


/**
 * MongoDB initialize
 */
MongoSetup()
    .then((data: MongoConnection) => {
        console.log(data.message);
    });

let app = initApp();

/**
 * Listening to application request
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`${message.application.listening} ${PORT}`);
})