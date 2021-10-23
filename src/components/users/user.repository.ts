import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "src/common/entity.repository";
import { IUserDBModel } from "./schemas/user.schema";

@Injectable()
export class UserRepository extends EntityRepository<IUserDBModel>{

    constructor(@InjectModel("User") private userModel: Model<IUserDBModel>){
        super(userModel);
    }

}