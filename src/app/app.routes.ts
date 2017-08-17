import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee';
import { EmployeeDetailsComponent } from './employee/details';
import { EquipmentComponent } from './equipment';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',    component: EmployeeListComponent },
  { path: 'employee/:id',    component: EmployeeDetailsComponent },
  { path: 'employee/:empId/equipment/add',    component: EquipmentComponent },
  { path: 'employee/:empId/equipment/:eqpId',    component: EquipmentComponent }
];
