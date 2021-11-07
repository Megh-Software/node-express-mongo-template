import mongoose from "mongoose";

export interface Student extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
}

export interface IStudentResponse {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export class StudentResponse implements IStudentResponse {
    id: string = "";
    name: string = "";
    email: string = "";
    phone: string = "";
}
