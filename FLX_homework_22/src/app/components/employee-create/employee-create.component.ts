import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { EmployeeService } from "../../services/employee.service";
import { IEmployee } from "../../models/employee.model";

@Component({
  selector: "app-employee-create",
  templateUrl: "./employee-create.component.html",
  styleUrls: ["./employee-create.component.css"]
})
export class EmployeeCreateComponent {
  employee: IEmployee = {
    city: null,
    name: "",
    surname: "",
    summary: "",
    age: 16,
    gender: null
  };
  cities: string[] = [
    "London",
    "Berlin",
    "Madrid",
    "Kyiv",
    "Lviv",
    "Rome",
    "Paris",
    "Bucharest",
    "Minsk",
    "Vienna",
    "Budapest",
    "Hamburg",
    "Warsaw",
    "Barcelona",
    "Munich",
    "Kharkiv",
    "Milan",
    "Prague"
  ];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  get userDataNotFilled(): boolean {
    return (
      !this.employee.city ||
      !this.employee.surname ||
      !this.employee.name ||
      !this.employee.gender
    );
  }

  create(): void {
    if (
      confirm(
        `Are you sure to create user ${this.employee.name} ${
          this.employee.surname
        }`
      )
    ) {
      this.employeeService.addNewEmployee(this.employee);
      alert("User created successfully!");
      this.router.navigate(["/employees"]);
    }
  }
}
