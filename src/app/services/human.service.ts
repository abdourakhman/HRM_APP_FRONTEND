import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, tap, throwError } from "rxjs";
import { Employee } from "../models/Employee.model";


@Injectable()
export class HumanService{

    
    constructor(private http:HttpClient){}

    private readonly myApiUrl = 'http://localhost:8081/api';
    private selectedEmployeeSubject = new Subject<Employee>();
    selectedEmployee$ = this.selectedEmployeeSubject.asObservable();
    selectedEmployee:Employee
    listEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.myApiUrl}/employees`).pipe(
                tap(data => console.log(data)),
                catchError(this.handleError)
                )
    }

    getSelectedEmployee(id: number) {
    this.http.get<Employee>(`${this.myApiUrl}/employees/${id}`).subscribe(
        (data) => {
        this.selectedEmployee = data;
        this.selectedEmployeeSubject.next(data); // Diffuser la nouvelle valeur de selectedEmployee
        },
        catchError(this.handleError)
    );
    }


    handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
}