import { User } from "./User.model";

export class Complaint{
    id:number;
    subject:string;
    detail:string;
    user:User;
    resolved:boolean;
    last_update:Date;
}