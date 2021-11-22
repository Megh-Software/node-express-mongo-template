import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    name: {
        type: String,
        maxLength: 200,
        index: true,
        required: true
    },
    email: {
        type: String,
        maxLength: 50,
        required: true
    },
    phone: {
        type: String,
        maxLength: 16,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})
