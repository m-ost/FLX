import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: IEmployee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployeeById(+id);
  }

  save(): void {
    this.employeeService.editEmployee(this.employee);
    this.router.navigate(['/empoyees']);
  }
}
