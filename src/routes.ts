import express, { Request, Response, Router } from "express";
import { IRoute } from "./types";
import StudentRoutes from "./routes/student.routes"

const getHandler = (req: Request, res: Response) => {
    res.send("Yeah it's hello....");
};

export const routes: Array<IRoute> = [
    {
        method: "get",
        path: "/hello",
        handler: getHandler
    },
    ...StudentRoutes
]

let router: Router = express.Router();

routes.forEach((route: IRoute) => {
    (router as any)[route.method](route.path, route.handler);
})

export default router;