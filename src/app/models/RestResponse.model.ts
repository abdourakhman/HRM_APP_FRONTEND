import { Page } from "./Page.model";

export class RestResponse{

    constructor(
        public _embedded:object[],
        public page:Page
    ){}
}