import { ContractStatus } from "../enumeration/ContractStatus.enum";
import { ContractType } from "../enumeration/ContractType.enum";
import { Employee } from "./Employee.model";
import { HumanResourceManager } from "./HumanResourceManager.model";

export class Contract{

    constructor(
        public id : number,
        public start : Date,
        public end : Date,
        public type : ContractType,
        public renumeration : number,
        public status : ContractStatus,
        public employeeID : number,
        public humanResourceManagerID : number,
        public employee : Employee,
        public humanResourceManager : HumanResourceManager
    ){}
}