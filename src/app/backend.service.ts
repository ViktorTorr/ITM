import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BackendService {

  constructor(
    public http: Http
  ) {}

  public getEmployeeList() {
    // console.log('Title#getData(): Get Data');
    return this.http.get('/api/employees');
      // .map((res) => res.json());
    // return {
    //   value: 'AngularClass'
    // };
  }

}
