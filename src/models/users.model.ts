import { Schema, model } from "mongoose";
import isEmail from "validator/lib/isEmail";
import { IUser } from "../interfaces/users.interface";
import { Roles } from "../utils/users.roles.enum";

const User = new Schema<IUser>(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true,
        validate:{
            validator: isEmail,
            message: "Write a valid email"
        } },
        password: { type: String, required: true },
        role: {type: String,enum: Roles, default: Roles.USER}
    },
    { timestamps: true }
);
export default model("User", User);
