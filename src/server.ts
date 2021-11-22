import { initApp } from "./app";
import { message } from "./configs/messages";
import { MongoSetup } from "./core/db";
import { MongoConnection } from "./types";
import './configs/dtenv_config';
import { ConnectToWebSocketServer } from "./websocket/socketServer";
import "./core/db.mysql";

/**
 * MongoDB initialize...
 */
MongoSetup()
    .then((data: MongoConnection) => {
        console.log(data.message);
    });

let app = initApp();

ConnectToWebSocketServer(app);