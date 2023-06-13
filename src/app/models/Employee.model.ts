import { EmployeeStatus } from "../enumeration/EmployeeStatus.enum";
import { Gender } from "../enumeration/Gender.enum";
import { Department } from "./Department.model";
import { Job } from "./Job.model";
import { Manager } from "./Manager.model";

export class Employee{

    constructor(
        public id:number,
        public registrationNumber:string,
        public name:string,
        public firstName:string,
        public gender:Gender,
        public birthday:Date,
        public address:string,
        public telephone:number,
        public email:string,
        public hiringDate:Date,
        public status:EmployeeStatus,
        public photoUrl:string,
        public manager:Manager,
        public jobID:number,
        public departmentID:number,
        public job:Job,
        public department:Department
    ){}
}
