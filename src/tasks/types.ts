import { Document } from "mongoose";

export interface ITask extends Document{
  uuid?: string;
  title?: string;
  description?: string;
  status?: boolean;
  dueDate?: Date;
}