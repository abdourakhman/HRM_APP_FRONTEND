import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class OrganizationService{

    private readonly myApiUrl = "http://localhost:8000";

    constructor(private httpclient: HttpClient){}
    
}