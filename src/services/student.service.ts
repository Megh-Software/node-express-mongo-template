import * as Helper from "../helpers/service.helper";
import { StudentDocument } from "../services/documents";
import { Student, StudentResponse } from "../models/student.model";

export const getAllStudents = async (): Promise<StudentResponse[]> => {
    var students = await Helper.getAll(StudentDocument, new StudentResponse());
    return students;
}

export const saveStudent = async (student: Student) => {
    return await Helper.save(StudentDocument, student);
}