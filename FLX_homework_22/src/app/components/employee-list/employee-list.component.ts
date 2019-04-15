import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../../services/employee.service";
import { IEmployee } from "../../models/employee.model";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  searchText: string;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.employeeList.then((data: IEmployee[]) => {
      this.employees = data;
    });
  }

  remove(id: number): void {
    this.employeeService.removeEmployee(id);
    this.employeeService.employeeList.then((data: IEmployee[]) => {
      this.employees = data;
    });
  }
}
