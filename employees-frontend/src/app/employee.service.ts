import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'https://refactored-memory-4966pvw5vxjf7j9r-8080.app.github.dev/api/v1/employees';
  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
}
