import { IUser } from "../interfaces/users.interface";
import User from "../models/users.model"


export class UsersService{
    async registerUser(user: IUser): Promise<IUser> {
       try{
           return await new User(user).save();
       }catch(e){
           throw e;
       }
    } 
    async getUserByMail(mail: string): Promise<IUser | null> {
       try{
           return await User.findOne({email: mail})
       }catch(e){
           throw e;
       }
    }
     
   }