import { model, Schema } from "mongoose";
import { ITask } from "../utils/types";
import { Status } from "../utils/tasks.status.enum";

const Task = new Schema<ITask>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: false, },
    dueDate: { type: Date, required: true,
        validate: {
            validator: (date: Date) => date > new Date(), // Ensure due date is in the future
            message: "Due date must be in the future",
        } },
    status: { type: String, enum: Status, default: Status.PENDING },
  },
  { timestamps: true }
);

export default model("Task", Task);
