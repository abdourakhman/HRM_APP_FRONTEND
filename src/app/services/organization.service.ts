import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Department } from "../models/Department.model";
import { Job } from "../models/Job.model";

@Injectable()
export class OrganizationService{

    private readonly myApiUrl = "http://localhost:8000/api";

    constructor(private http: HttpClient){}

    saveJob(job){
        return this.http.post(`${this.myApiUrl}/job`,job).subscribe(
            (data)=>console.log(data),
            (error)=>console.log(error),
            ()=>console.log("retrieving data succesffully")
        )
    }

    listDepartment():Observable<Department[]>{
        return this.http.get<Department[]>(`${this.myApiUrl}/departments`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }


    listJob(): Observable<Job[]>{
        return this.http.get(`${this.myApiUrl}/jobs`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }
    
    handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
    
}