import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from './equipment.services';
// import { Employee } from '../models/employee.model';
// import { TableDataSource } from './employee-list-source.service';
// import { EmployeeService } from './employee.service';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  providers: [EquipmentService]
})

export class EquipmentComponent implements OnInit {
  private equipment: Equipment;
  private params = this.actRouter.params['_value'];
  private typeSelect = [{name: 'Pc', value: 'pc'}, {name: 'Mouse', value: 'mouse'}, {name: 'Keyboard', value: 'keyboard'}, {name: 'Screen', value: 'screen'}];

  constructor(
    private actRouter: ActivatedRoute,
    private eqpService: EquipmentService
  ) { }

  public ngOnInit() {
    if (!this.params.eqpId) {
      this.equipment = new Equipment();
    } else {
      this.eqpService.getEquipmentDetails(this.params.eqpId)
        .then( (equipment) => {
          this.equipment = equipment;
        });
    }
  }

  public onUpdate() {
    this.eqpService.updateEquipment(this.equipment)
      .then( (equipment) => {
        // this.equipment = equipment;
      });
  }

  public onAddNew() {
    this.eqpService.addNewEquipment(this.params.empId, this.equipment)
      .then( (equipment) => {
        // this.equipment = equipment;
      });
  }
  // public redirect(params: String) {
  //   this.router.navigate(['employee/' + params]);
  // }
}

