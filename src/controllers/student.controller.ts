import { Request, Response } from "express";
import * as service from "../services/student.service";

export const get = (req: Request, res: Response) => {
    res.send("Student Enitity....");
};

export const getAll = async (req: Request, res: Response) => {
    let students = await service.getAllStudents();
    res.send(students);
};

export const post = async (req: Request, res: Response) => {
    let studentId = await service.saveStudent(req.body);
    res.send(`New Student Saved: ID-${studentId} `);
};
