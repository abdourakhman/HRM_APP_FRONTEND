import { Absence } from "../enumeration/Absence.enum";
import { Employee } from "./Employee.model";


export class Timesheet{
    constructor(
        public id : number,
        public createdAt : Date,
        public hoursWorked:Date,
        public absence : Absence,
        public comment : string,
        public employeeID:number,
        public employee : Employee
    ){}
}