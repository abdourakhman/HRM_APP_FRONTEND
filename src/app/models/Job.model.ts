import { Responsibility } from "../enumeration/Responsiblity.enum";

export class Job{

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public skills:string,
        public levelOfResponsibility: Responsibility
    ){}
}