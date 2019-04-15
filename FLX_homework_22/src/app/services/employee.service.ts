import { Injectable } from "@angular/core";
import { IEmployee } from "../models/employee.model";

@Injectable()
export class EmployeeService {
  list: IEmployee[];
  id = 0;

  constructor() {}

  get employeeList(): Promise<IEmployee[]> {
    const mockData: IEmployee[] = [
      {
        name: "Taras",
        id: 1,
        surname: "Bulba",
        age: 46,
        gender: "Male",
        city: "Lviv",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula eros, auctor in pulvinar ac, gravida et massa. Aliquam ut mi at erat efficitur aliquet. Vestibulum in nisi metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pharetra porttitor egestas. Maecenas eget gravida est."
      },
      {
        name: "Viktor",
        id: 2,
        surname: "Pavlik",
        age: 34,
        gender: "Male",
        city: "Lviv",
        summary:
          " Mauris sit amet arcu mi. Morbi ac elementum risus. Nunc porttitor eros id mi posuere sollicitudin. Sed malesuada dapibus sapien quis suscipit. Quisque luctus porta augue, id lobortis dolor consequat sit amet."
      },
      {
        name: "Pavlo",
        id: 3,
        surname: "Zibrov",
        age: 37,
        gender: "Male",
        city: "Odessa",
        summary:
          "Vivamus velit tortor, tempor et felis eu, porttitor maximus orci. Fusce tellus mauris, pretium vitae dictum at, volutpat quis mi. Pellentesque consequat nibh neque, sed maximus est elementum eu. Aliquam lacinia id tellus non pharetra. Aliquam erat volutpat. Phasellus quam augue, volutpat a ipsum a, consectetur imperdiet felis."
      },
      {
        name: "Liliya",
        id: 4,
        surname: "Sandulesa",
        age: 17,
        gender: "Female",
        city: "Madrid",
        summary:
          "Mauris sed viverra dui. Aliquam vitae lacus imperdiet, pretium diam quis, cursus nisl. Nullam tincidunt felis augue, commodo ultrices orci molestie sit amet. Proin vel sapien consectetur, vulputate odio eleifend, feugiat metus."
      },
      {
        name: "Oksana",
        id: 5,
        surname: "Bilozir",
        age: 60,
        gender: "Female",
        city: "Stambul",
        summary:
          "Curabitur id ipsum nec neque convallis efficitur nec quis libero. Nullam tincidunt commodo nunc, ac commodo erat dignissim id. Sed malesuada vitae nulla non tincidunt. Maecenas eleifend viverra velit, ut scelerisque mi elementum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sed ante id est varius tempor."
      }
    ];

    if (!this.list) {
      this.id = mockData.length;
      this.list = mockData;
    }

    return Promise.resolve(this.list);
  }

  addNewEmployee(data: IEmployee): void {
    const newEmpl = Object.assign(data, {
      id: ++this.id
    });
    this.list.push(newEmpl);
  }

  removeEmployee(id: number): void {
    this.list = this.list.filter(employee => employee.id !== id);
  }

  editEmployee(data: IEmployee): void {
    this.list.forEach(employee => {
      if (employee.id === data.id) {
        Object.assign(employee, data);
      }
    });
  }

  getEmployeeById(id: number): IEmployee {
    return this.list.find(employee => employee.id === id);
  }
}
