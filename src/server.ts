import { initApp } from "./app";
import { message } from "./configs/messages";
import { MongoSetup } from "./core/db";
import { MongoConnection } from "./types";
import './configs/dtenv_config';

/**
 * MongoDB initialize...
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