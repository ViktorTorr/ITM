import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Equipment } from '../../models/equipment.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Injectable()
export class EquipmentTableDataSource extends DataSource<Equipment> {
  constructor(private equipments: Equipment[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  public connect(): Observable<Equipment[]> {
    return Observable.of(this.equipments);
  }

  public disconnect() {}
}
