import { RequestTimeOffStatus } from "../enumeration/RequestTimeOffStatus.enum";
import { TypeTimeOff } from "../enumeration/TypeTimeOff.enum";
import { Employee } from "./Employee.model";
import { HumanResourceManager } from "./HumanResourceManager.model";

export class timeOffRequest{

    constructor(
        public id:number,
        public type:TypeTimeOff,
        public reason:string,
        public requestDate:Date,
        public status : RequestTimeOffStatus,
        public desiredStartDate:Date,
        public desiredEndDate:Date,
        public employeeID:number,
        public humanResourceManagerID:number,
        public employee:Employee,
        public rh:HumanResourceManager
    ){}
}