import { Request, Response } from "express";
import * as service from "../services/student.service";
import { IRoute } from "../types";

const get = (req: Request, res: Response) => {
    res.send("Student Enitity....");
};

const getAll = async (req: Request, res: Response) => {
    let students = await service.getAllStudents();
    res.send(students);
};

const post = async (req: Request, res: Response) => {
    let studentId = await service.saveStudent(req.body);
    res.send(`New Student Saved: ID-${studentId} `);
};

/**
 * Student Controller Routes
 */
export const routes: IRoute[] = [
    {
        method: "get",
        path: "/students",
        handler: getAll
    }, {
        method: "get",
        path: "/student",
        handler: get
    }, {
        method: "post",
        path: "/student",
        handler: post
    }
]