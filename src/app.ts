import express, { Application, NextFunction, Request, Response } from "express";
import router from "./routes";
import compression from "compression";

const shouldCompress = (req: Request, res: Response) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
}


export const initApp = () => {
    let app: Application = express();

    app.use(compression({ filter: shouldCompress }));
    app.use(express.json());
    app.use("/api", router);
    app.use("/", rootRouteHandler);
    app.use(routeErrorHandler);

    return app;
}

const rootRouteHandler = (req: Request, res: Response, next: NextFunction) => {
    return res.send(`Express Server Running with typescript \n ${req.method} \n ${new Date()}`);
};

const routeErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next(err)
    res.status(500)
    res.send(`Error Occurred! ${err.message}`)
};