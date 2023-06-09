import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { Contract } from "../models/Contract.model";
import { TimeOffRequest } from "../models/TimeOffRequest.model";
import { Timesheet } from "../models/Timesheet.model";

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

    findEmployeeContract(employeeID:number): Observable<Contract[]>{
      return this.http.get<Contract[]>(`${this.myApiUrl}/contracts/employee/${employeeID}`).pipe(
          tap(console.log),
          catchError(this.handleError)
      )
  }


    listTimeOffRequest(slug:string): Observable<TimeOffRequest[]>{
        return this.http.get<TimeOffRequest[]>(`${this.myApiUrl}/${slug}`).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }
    
    findTimeOffRequest(slug:string){
      return this.http.get<TimeOffRequest>(`${this.myApiUrl}/${slug}`).pipe(
        catchError(this.handleError)
      )
    }

    updateTimeOffRequest(timeOffRequest: TimeOffRequest){
      return this.http.put(`${this.myApiUrl}/timeOffRequest`, timeOffRequest);
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

    listTimesheets(slug:string): Observable<Timesheet[]> {
        return this.http.get<Timesheet[]>(`${this.myApiUrl}/${slug}`).pipe(
          map((timesheets: Timesheet[]) => {
            return timesheets.map((timesheet: Timesheet) => {
              // Convertir la durée en objet Date
              let duration:string  = "";
              if(!timesheet.hoursWorked)
                duration = "PT0H";
              else
               duration = timesheet.hoursWorked.toString(); 
              const hours = parseInt(duration.substring(2, duration.indexOf('H')), 10);
              const date = new Date();
              date.setHours(hours);
              timesheet.hoursWorked = date; // Remplacer la durée par l'objet Date
              return timesheet;
            });
          }),
          tap(console.log),
          catchError(this.handleError)
        );
      }

      getNumberDistintContract(){
        return this.http.get<Map<string,number>>(`${this.myApiUrl}/contracts/distinct`).pipe(
          tap((data)=> console.log(data)),
          catchError(this.handleError)
      );
      }

      saveContract(contract:Contract){
        return this.http.post(`${this.myApiUrl}/contract`,contract).pipe(
          tap((data)=> console.log(data)),
          catchError(this.handleError)
      );
      }
      updateContract(contract:Contract){
        return this.http.put(`${this.myApiUrl}/contract`,contract).subscribe(
        (data)=> console.log(data),
          catchError(this.handleError)
      );
      }

      deleteContract(contractID:number){
        return this.http.delete(`${this.myApiUrl}/contract/${contractID}`).subscribe(
        (data)=> console.log(data),
          catchError(this.handleError)
      );
      }
   
      
    handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error)
        throw throwError(`An error occurred - Error code : ${error.status}`);
      }
}