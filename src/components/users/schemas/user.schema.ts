import { Schema, Document } from 'mongoose';
import { User } from "../user.entity";

export type IUserDBModel = User & Document;

export const UserSchema = new Schema({
    username  : { type: String, required: true },
    password  : { type: String, required: true },
    email     : { type: String, required: true },
});
