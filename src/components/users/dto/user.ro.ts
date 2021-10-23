import { User } from "../user.entity";

export class UserRo{

    readonly id: string;

    readonly username: string;

    readonly email: string;

    constructor(userEntity: User){

        this.id = userEntity.id;
        this.username = userEntity.username;
        this.email = userEntity.email;

    }

}