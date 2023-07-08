import { User } from "./User.model";
import { Complaint } from "./complaint.model";


export class ComplaintUpdate{
    id:number;
    complaint:Complaint;
    user:User;
    isWorkingOn:boolean;
    isResolved:boolean;
    statusRemark:string;
    last_update:Date;
}