import { ITask } from "../interfaces/tasks.interface";
import Task from "../models/tasks.model"
import { isValidStatus } from "../utils/isValidStatus";
export class TasksService{
 async createTask(task: ITask): Promise<ITask> {
    try{
        const existingTask = await Task.findOne({title: task.title});
        if(existingTask){
            throw new Error("Task with same title exists !");
        }
        return await new Task(task).save();
    }catch(e){
        throw e;
    }
 } 
 async getTask(id: string): Promise<ITask | null> {
    try{
        return await Task.findById(id);
    }catch(e){
        throw e;
    }
 }
 async getAllTasks(): Promise<ITask[] | null> {
    try{
        return await Task.find();
    }catch(e){
        throw e;
    }
 }
 async updateTask(task: ITask, id: string): Promise<ITask | null>{
    try{
        if (task.status && !isValidStatus(task.status)) {
            throw new Error("Invalid Status");
        }
        return await Task.findByIdAndUpdate(id,task,{new:true});
    }catch(e){
        throw e;
    }
 }
 async deleteTask(id: string): Promise<any> {
    try{
        return await Task.findByIdAndDelete(id);
    }catch(e){
        throw e;
    }
 }

    
}