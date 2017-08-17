import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { LoggerService } from '../logger.service';
import { Employee } from '../models/employee.model';
import { Equipment } from '../models/equipment.model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];
  private employeesUrl = 'api/employees';
  private equipmentUrl = 'equipment';

  constructor(
    private backend: BackendService,
    private logger: LoggerService,
    private http: Http
  ) { }

  public deleteEquipment(eqpId, empId): Promise<any> {
    return this.http.delete(`${this.employeesUrl}/${empId}/${this.equipmentUrl}/${eqpId}`)
      .toPromise()
      .then( (response) => response.json())
      .catch(this.handleError);
  }


  public getEmployees(): Promise<Employee[]> {
      return this.http.get(this.employeesUrl)
        .toPromise()
        .then( (response) => response.json() as Employee[])
        .catch(this.handleError);
  }

  public getEmployeeDetails(empId): Promise<Employee> {
    return this.http.get(`${this.employeesUrl}/${empId}`)
      .toPromise()
      .then( (response) => response.json() as Employee)
      .catch(this.handleError);
  }

  public getGithubRepos(username): Promise<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`)
      .toPromise()
      .then( (response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
