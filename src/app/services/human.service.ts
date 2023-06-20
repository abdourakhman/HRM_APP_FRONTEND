import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, tap, throwError } from "rxjs";
import { Employee } from "../models/Employee.model";


@Injectable()
export class HumanService{

    constructor(private http:HttpClient){}

    private readonly myApiUrl = 'http://localhost:8081/api';
    private selectedEmployeeSubject = new Subject<Employee>();
    private employeeSubject = new Subject<Employee[]>();
    employee$ = this.employeeSubject.asObservable();
    selectedEmployee$ = this.selectedEmployeeSubject.asObservable();
    selectedEmployee:Employee
    employees:Employee[];

    getEmployeeByRegistration(registrationNumber:string):Observable<Employee>{
        return this.http.get<Employee>(`${this.myApiUrl}/employee/${registrationNumber}`).pipe(
            tap(
                (employee)=> console.log(employee)
            ),
            catchError(this.handleError)
        )
    }
    
    listEmployeeOfDepartment(id: number){

        if(id !== 0){
            this.http.get<Employee[]>(`${this.myApiUrl}/employees/department/${id}`).subscribe(
                (data) => {
                    this.employees = data;
                    this.employeeSubject.next(data);
                },
                catchError(this.handleError)
            )
        }
        else{
            this.http.get<Employee[]>(`${this.myApiUrl}/employees`).subscribe(
                (data) => {
                    this.employees = data;
                    this.employeeSubject.next(data);
                }
            )
        }
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

    getNumberOfEmployees(){
        return this.http.get<number>(`${this.myApiUrl}/numberOfEmployees`).pipe(
            tap((data)=> console.log(data)),
            catchError(this.handleError)
        );
    }

    getNumberOfActiveEmployees(){
        return this.http.get<number>(`${this.myApiUrl}/numberOfEmployees/active`).pipe(
            tap((data)=> console.log(data)),
            catchError(this.handleError)
        );
    }

    
    getNumberOfEmployeesByDepartment(){
        return this.http.get<Map<string,number>>(`${this.myApiUrl}/numberOfEmployees/department`).pipe(
            tap((data)=> console.log(data)),
            catchError(this.handleError)
        );
    }

    getNumberOfEmployeesByJob(){
        return this.http.get<Map<string,number>>(`${this.myApiUrl}/numberOfEmployees/job`).pipe(
            tap((data)=> console.log(data)),
            catchError(this.handleError)
        );
    }
    getNumberOfEmployeesByGender(){
        return this.http.get<any>(`${this.myApiUrl}/numberOfEmployees/gender`).pipe(
            tap((data)=> console.log(data)),
            catchError(this.handleError)
        );
    }
    getAverageAgeOfEmployees(){
        return this.http.get<number>(`${this.myApiUrl}/employees/average/age`).pipe(
            tap((data)=> console.log(data)),
            catchError(this.handleError)
        );
    }

    


    handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
}