import Employee from "./EmployeeClass";

export default class Store {
  static initializeStore() {
    let data = localStorage.getItem("employees");
    if (data === null) {
      const starterData = {
        id: 1,
        employees: [],
      };
      localStorage.setItem("employees", JSON.stringify(starterData));
    }
  }

  static getID() {
    return JSON.parse(localStorage.getItem("employees")).id;
  }

  static addEmployee(employee) {
    let data = JSON.parse(localStorage.getItem("employees"));
    data.employees.push(employee);
    data.id = Number(data.id) + 1;
    this.setData(data);
  }

  static updateEmployee(employee) {
    const employees = this.getEmployees();
    const newEmployees = employees.map(emp => {
      if (emp.id !== employee.id) {
        return emp;
      }
      return employee;
    });
    this.setEmployees(newEmployees);
  }

  static removeEmployee(id) {
    const employees = this.getEmployees();
    let newEmployees = [];
    employees.forEach(emp => {
      if (emp.id !== id) {
        newEmployees.push(emp);
      }
    });
    this.setEmployees(newEmployees);
  }

  static getEmployees() {
    this.initializeStore();
    return JSON.parse(localStorage.getItem("employees")).employees;
  }

  static getData() {
    //for exporting
    this.initializeStore();
    return JSON.parse(localStorage.getItem("employees"));
  }

  static setEmployees(newEmployees) {
    let data = JSON.parse(localStorage.getItem("employees"));
    data.employees = newEmployees;
    if (newEmployees.length === 0) {
      data.id = 1;
    }
    this.setData(data);
  }

  static setData(data) {
    localStorage.setItem("employees", JSON.stringify(data));
  }

  static getEmployeeByID(targetID) {
    //takes NUMBER ID
    //returns Employee Object
    const employeesArray = this.getEmployees();
    const employee = employeesArray.find(employee => employee.id === targetID);
    if (employee === undefined) {
      console.warn("Employee not found: ", targetID);
      return;
    }
    return new Employee(employee);
  }

  static async setSampleData() {
    const promise = await fetch(
      "https://my.api.mockaroo.com/employee_management_system_sample_data.json?key=1ca54a00"
    );
    const employees = await promise.json();

    const data = {
      id: employees.length + 1, //how many employees will get returned from api + 1
      employees: employees.map(emp => {
        return {
          ...emp,
          gender: emp.gender.toLowerCase(), //gender is capital cased from api, so converting to lower
        };
      }),
    };

    return Store.setData(data); //'Store' instead of 'this' as this is an async function
    // returns a promise
  }
}
