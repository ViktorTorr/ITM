import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { Http } from '@angular/http';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EquipmentService {
  private equipment: Equipment;
  private employeesUrl = 'api/employees';
  private equipmentUrl = 'equipment';

  constructor(
    private http: Http,
    private location: Location
  ) { }

  public deleteEquipment(eqpId): Promise<any> {
    return this.http.delete(`${this.employeesUrl}/${this.equipmentUrl}/${eqpId}`)
      .toPromise()
      .then( (response) => response.json())
      .catch(this.handleError);
  }

  public updateEquipment(eqp): Promise<any> {
    console.log('eqp', eqp);
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.employeesUrl}/${this.equipmentUrl}/${eqp._id}`, eqp)
      .toPromise()
      .then( (response) => {
        response.json();
        this.location.back();
      })
      .catch(this.handleError);
  }

  public addNewEquipment(empId, eqp): Promise<any> {
    console.log('add new', empId, eqp);
    return this.http.post(`${this.employeesUrl}/${empId}/addEq`, eqp)
      .toPromise()
      .then( (response) => {
        response.json();
        this.location.back();
      })
      .catch(this.handleError);
  }

  public getEquipmentDetails(eqpId): Promise<Equipment> {
    return this.http.get(`${this.employeesUrl}/${this.equipmentUrl}/${eqpId}`)
      .toPromise()
      .then( (response) => response.json() as Equipment)
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
