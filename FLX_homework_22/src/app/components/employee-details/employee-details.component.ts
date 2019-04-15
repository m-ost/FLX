import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { EmployeeService } from "../../services/employee.service";
import { IEmployee } from "../../models/employee.model";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  employee: IEmployee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.employee = this.employeeService.getEmployeeById(+id);
  }

  remove(): void {
    this.employeeService.removeEmployee(this.employee.id);
    this.router.navigate(["/employees"]);
  }
}
