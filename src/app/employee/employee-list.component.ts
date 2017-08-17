import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { TableDataSource } from './employee-list-source.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  providers: [EmployeeService, TableDataSource]
})

export class EmployeeListComponent implements OnInit {
  private employees: Employee[];
  private displayedColumns = ['name', 'surname', 'equipment', 'githubUsername', 'showDetails'];
  private dataSource: TableDataSource | null;

  constructor(
    private service: EmployeeService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.service.getEmployees()
      .then( (employees) => {
        this.employees = employees;
        this.dataSource = new TableDataSource(this.employees);
      });
  }

  public redirect(params: String) {
    this.router.navigate(['employee/' + params]);
  }
}

