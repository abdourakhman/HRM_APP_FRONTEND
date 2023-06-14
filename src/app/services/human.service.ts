import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Employee } from "../models/Employee.model";


@Injectable()
export class HumanService{

    constructor(private http:HttpClient){}

    private readonly myApiUrl = 'http://localhost:8081/api';

    listEmployee():Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.myApiUrl}/employees`);
    }

    listEmployees(){

        return this.http.get<any>(`${this.myApiUrl}/employees`).subscribe();
    }

handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
}