import * as WebSocketServer from "ws";
import http from "http";
import { Application } from "express";
import { RawData } from "ws";
import { message } from "../configs/messages";

let interval: any = null;

export const ConnectToWebSocketServer = (app: Application) => {

    let server = http.createServer(app);
    let wss = new WebSocketServer.Server({
        server,
        perMessageDeflate: {
            zlibDeflateOptions: {
                // See zlib defaults.
                chunkSize: 1024,
                memLevel: 7,
                level: 3
            },
            zlibInflateOptions: {
                chunkSize: 10 * 1024
            },
            // Other options settable:
            clientNoContextTakeover: true, // Defaults to negotiated value.
            serverNoContextTakeover: true, // Defaults to negotiated value.
            serverMaxWindowBits: 10, // Defaults to negotiated value.
            // Below options specified as default values.
            concurrencyLimit: 10, // Limits zlib concurrency for perf.
            threshold: 1024 // Size (in bytes) below which messages
            // should not be compressed if context takeover is disabled.

        }
    });

    wss.on('connection', (ws: WebSocketServer.WebSocket) => {

        ws.isAlive = true;

        ws.on('pong', () => {
            ws.isAlive = true;
        });

        ws.on("message", (data: RawData, isBinarry: boolean) => {
            if (data.toString().toLowerCase() == "hello") {
                ws.send("Hello From the other side");
            }
        });
        ws.send("Server Connected....");
    });

    clientConnectionChecking(wss)

    const PORT = process.env.PORT || 3000;


    server.on('upgrade', function upgrade(request, socket, head) {
        // This function is not defined on purpose. Implement it with your own logic.
        // authenticate(request, (err, client) => {
        //     if (err || !client) {
        //         socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        //         socket.destroy();
        //         return;
        //     }

        //     wss.handleUpgrade(request, socket, head, function done(ws) {
        //         wss.emit('connection', ws, request, client);
        //     });
        // });
    });


    wss.on('close', function close() {
        clearInterval(interval);
    });

    server.listen(PORT, () => {
        console.log(`${message.application.listening} ${PORT}`);
    });

}

const clientConnectionChecking = (wss: WebSocketServer.Server) => {
    interval = setInterval(() => {
        wss.clients.forEach((ws: WebSocketServer.WebSocket) => {

            if (!ws.isAlive) return ws.terminate();

            ws.isAlive = false;
            ws.ping(null, false, true);
        });
    }, 10000);
}