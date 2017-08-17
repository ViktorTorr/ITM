import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee.model';
import { Equipment } from '../../models/equipment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentTableDataSource } from './employee-equipment-source.service';
import { AppState } from '../app.service';


@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  providers: [EmployeeService]
})

export class EmployeeDetailsComponent implements OnInit {
  private employee: Employee;
  private equipment: Equipment[];
  private displayedColumns = ['type', 'manufacturer', 'serialNumber', 'edit', 'remove'];
  private dataSource: EquipmentTableDataSource | null;
  private gihubRepos = [];

  constructor(
    private service: EmployeeService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit() {
    const params = this.actRouter.params['_value'];
    this.service.getEmployeeDetails(params.id).then( (employee) => {
      this.employee = employee;
      this.dataSource = new EquipmentTableDataSource(this.employee.equipment);

      if(this.employee.githubUsername) {
        this.service.getGithubRepos(this.employee.githubUsername)
          .then( (repo) => {
            this.gihubRepos = repo;
          });
      }
    });
  }

  public onDelete(eqpId: string) {
    this.service.deleteEquipment(eqpId, this.employee._id);
    this.employee.equipment.map((eqp, index) => {
      if (eqp._id === eqpId) {
        this.employee.equipment.splice(index, 1);
      }
    });
    this.dataSource = new EquipmentTableDataSource(this.employee.equipment);
  };

  public onEdit(empId, eqpId, eqp) {
    this.router.navigate(['employee/' + empId + '/equipment/' + eqpId]);
  };

  public addNew(empId) {
    this.router.navigate(['employee/' + empId + '/equipment/add']);
  };

}
