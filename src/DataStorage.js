import Employee from "./EmployeeClass";

/**
 * Data Storage class which acts as the middle man for all local storage operations in the app.
 */
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

  /**
   *
   * @returns {number} The ID to be used when making a new employee object
   */
  static getID() {
    return JSON.parse(localStorage.getItem("employees")).id;
  }

  /**
   *
   * @param {Employee} employee - The employee object to be added to employees array
   */
  static addEmployee(employee) {
    let data = JSON.parse(localStorage.getItem("employees"));
    data.employees.push(employee);
    data.id = Number(data.id) + 1;
    this.setData(data);
  }

  /**
   *
   * @param {Employee} employee -The Employee object to be updated in the employees array (ID is important)
   */
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

  /**
   *
   * @param {Number} id -The employee's ID who is to be removed
   */
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

  /**
   *
   * @returns {Array} employees array (normal objects), make 'Employee' object from the data to use
   */
  static getEmployees() {
    this.initializeStore();
    return JSON.parse(localStorage.getItem("employees")).employees;
  }

  /**
   *
   * @returns data from the local storage item 'data'
   */
  static getData() {
    //for exporting
    this.initializeStore();
    return JSON.parse(localStorage.getItem("employees"));
  }

  /**
   *
   * @param {[]} newEmployees - employees array to be set in local storage
   */
  static setEmployees(newEmployees) {
    let data = JSON.parse(localStorage.getItem("employees"));
    data.employees = newEmployees;
    if (newEmployees.length === 0) {
      data.id = 1;
    }
    this.setData(data);
  }

  /**
   *
   * @param {Object} data - data to be set in 'data' item in local storage
   */
  static setData(data) {
    localStorage.setItem("employees", JSON.stringify(data));
  }

  /**
   *
   * @param {Number} targetID - the ID of the requested Employee
   * @returns {Employee} - The employee requested
   */
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

  /**
   * Fetches Sample data from mockaroo, makes the data object and sets it in the local storage
   * @returns Promise which resolves when employees is set in local storage
   */

  static async setSampleData() {
    const promise = await fetch(
      "https://my.api.mockaroo.com/employee_management_system_sample_data.json?key=1ca54a00"
    );
    const employees = await promise.json();

    const data = {
      id: employees.length + 1,
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
