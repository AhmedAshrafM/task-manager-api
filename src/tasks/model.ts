import { model, Schema } from "mongoose";
import { ITask } from "./types";


const Task = new Schema<ITask>(
    {
        title: { type: String, required: true},
        description: {type: String},
        dueDate: {type: Date, required: true},
        status: {type: Boolean, default: false},
    },
    {timestamps: true},
     
);


export default model('Task',Task)