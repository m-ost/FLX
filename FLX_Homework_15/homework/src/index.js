function Company(company) {
	this.companyName = company.name;
	this.owner = company.owner;
	this.maxCount = company.maxCompanySize;
	this._logs = [];
	this.startDate = new Date();
	this._employees = [];

  this._logs.push(`${this.companyName} was created in ${this.startDate}.`);
}

Company.prototype.addNewEmployee = function(employee) {
	if(employee instanceof Employee) {
	if(this._employees.length < this.maxCount) {
		this._employees.push(employee);
    employee.hire(this);
    this._logs.push(`${employee.name} starts working at ${this.companyName} in ${getDate()}.`);
	} else {
    let index = 0;
		let minSalary = this._employees[index].salary;
		for (let i = 1; i < this._employees.length; i++) {
			if(minSalary > this._employees[i].salary) {
        index = i;
				minSalary = this._employees[i].salary;
      }
    }
    this.removeEmployee(index);
    this.addNewEmployee(employee);
  }
}
};

Company.prototype.removeEmployee = function(index) {
  this._employees[index].fire(this.companyName);
  return this._employees.splice(index, 1);
};

Company.prototype.getAvarageSalary = function () {
  const averageSalary = this._employees.reduce((totalSalary, salary) => {
  const average = (totalSalary += salary.salary);
  return average;
}, 0) / this._employees.length;
  return averageSalary;
};

Company.prototype.getAverageAge = function() {
  const averageAge = this._employees.reduce((totalAge, age) => {
  const avage = (totalAge += age.age);
  return avage;
}, 0) / this._employees.length;
  return averageAge;
};

Company.prototype.getEmployees = function() {
  return this._employees;
};

Company.prototype.getFormattedListOfEmployees = function() {
  this._employees.forEach((employee) => {
    console.log(`${employee.name} works in ${this.companyName} ${employee._overallWoringTime} seconds `);
  });
};

Company.prototype.getHistory = function() {
  return this._logs;
}

function Employee(params) {
  this.name = params.name;
  this.primarySkill = params.primarySkill;
  this.age = params.age;
  this.salary = params.salary;
  this._overallWoringTime = 0;
  this._log = [];
  this.company = null;
  let startDate = 0;
  let endDate = 0;
}

function getDate() {
  return new Date();
}

Employee.prototype.getSalary = function() {
  return this.salary;
};

Employee.prototype.setSalary = function(salary) {
  if(salary <= this.salary) {
    console.log(`${this.name} deserves a bigger salary!`);
    this._log.push(`try to change salary from ${this.salary} to ${salary}`)
  } else {
    this._log.push(`Salary changed from ${this.salary}$ to ${salary}`);
    this.salary = salary;
  }
};

Employee.prototype.getWorkTimeInSeconds = function() {
  this._overallWoringTime += (this.endDate.getTime() - this.startDate.getTime())/1000;
  console.log(Math.ceil(this._overallWoringTime));

};

Employee.prototype.hire = function(companyName) {
  this.startDate = getDate();
  if(!this.company) {
  this.company = companyName.companyName;
  this._log.push(`${this.name} is hired for ${this.company} in ${this.startDate}`);
  } else {
  console.log(`${this.name} already works for ${this.company}`);
  }
};

Employee.prototype.fire = function() {
  this.endDate = getDate();
  this._log.push(`${this.name} is fired from ${this.company} in ${this.endDate}`);
  this.company = null;
};

Employee.prototype.getHistory = function() {
  return this._log;
};

//CODE example

// let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
// let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
// let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
// let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
// let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
// let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});
//
// let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
//
// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);
//
// console.log(epam.getHistory());
//
// /*
// "Epam was created in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time)"
// "Artem starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Vova starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Vasyl starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Ivan starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Orest starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Orest ends working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Anton starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// */
// epam.removeEmployee(2);
//
//
// console.log(vasyl.getHistory());
//
// /*
// "Vasyl is hired to Epam in Tue Mar 12 2019 07:45:55 GMT+0200 (FLE Standard Time)"
// "Vasyl is fired from Epam in Tue Mar 12 2019 07:45:55 GMT+0200 (FLE Standard Time)"
// */
//
// console.log(epam.getAvarageSalary()); // -> 2125
// console.log(epam.getAvarageAge());  // -> 21.25
//
// epam.addNewEmployee(5,6,9,5); // -> Please try to add Employee instance
//
// setTimeout(() => {
//    epam.removeEmployee(1);
//    console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
// }, 5000);
//
// vova.setSalary(900);
// vova.setSalary(2200);
// console.log(vova.getHistory());
