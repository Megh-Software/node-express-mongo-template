import mongoose from "mongoose";
import { Student } from "../models/student.model";
import { StudentSchema } from "./schema";

export const StudentDocument = mongoose.model<Student>("student", StudentSchema, "students");