import Task from "./model"
import { ITask } from "./types"
export class TasksService{
 async createTask(task: ITask): Promise<ITask> {
    try{
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