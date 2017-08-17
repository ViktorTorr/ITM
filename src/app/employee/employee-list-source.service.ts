import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk';
// import { Employee } from '../models/employee.model';
import { Employee } from '../models/employee.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Injectable()
export class TableDataSource extends DataSource<Employee> {
  constructor(private employees: Employee[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  public connect(): Observable<Employee[]> {
    return Observable.of(this.employees);
  }

  public disconnect() {}
}
