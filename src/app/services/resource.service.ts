import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Contract } from "../models/Contract.model";
import { timeOffRequest } from "../models/TimeOffRequest.model";

@Injectable()
export class ResourceService{

    constructor(private http:HttpClient){}

    private readonly myApiUrl = "http://localhost:8082/api";

    listContract(): Observable<Contract[]>{
        return this.http.get<Contract[]>(`${this.myApiUrl}/contracts`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    listTimeOffRequest(): Observable<timeOffRequest[]>{
        return this.http.get<timeOffRequest[]>(`${this.myApiUrl}/timeOffRequests`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getAverageSalary(){
        return this.http.get(`${this.myApiUrl}/contracts/average/salary`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getNumberOngoingProject(){
        return this.http.get(`${this.myApiUrl}/projects/ongoing`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
}