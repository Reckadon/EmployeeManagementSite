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
    localStorage.setItem("employees", JSON.stringify(data));
  }

  static updateEmployee(employee) {
    const employees = this.getEmployees();
    const newEmployees = employees.map((emp) => {
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
    employees.forEach((emp) => {
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

  static setEmployees(newEmployees) {
    let data = JSON.parse(localStorage.getItem("employees"));
    data.employees = newEmployees;
    if (newEmployees.length === 0) {
      data.id = 1;
    }
    localStorage.setItem("employees", JSON.stringify(data));
  }

  static getEmployeeByID(targetID) {
    //takes NUMBER ID
    //returns Employee Object
    const employeesArray = JSON.parse(localStorage.getItem("employees"))
      .employees;
    const employee = employeesArray.find(
      (employee) => employee.id === targetID
    );
    if (employee === undefined) return;
    const {
      id,
      fName,
      lName,
      age,
      salary,
      designation,
      gender,
      number,
      email,
      onLeave,
      dateEmployed,
    } = employee;
    return new Employee({
      id,
      fName,
      lName,
      age,
      salary,
      designation,
      gender,
      number,
      email,
      onLeave,
      dateEmployed,
    });
  }
}
