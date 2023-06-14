import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Employee } from "../models/Employee.model";
import { RestResponse } from "../models/RestResponse.model";

@Injectable()
export class HumanService{

    constructor(private http:HttpClient){}

    private readonly myApiUrl = 'http://localhost:8081/api';
    private readonly urlRestResource = 'http://localhost:8081/';

    listEmployee():Observable<RestResponse[]>{
        return this.http.get(`${this.urlRestResource}/employees?size=19`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
}