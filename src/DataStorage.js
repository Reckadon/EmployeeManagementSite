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
  static getEmployees() {
    this.initializeStore();
    return JSON.parse(localStorage.getItem("employees")).employees;
  }
}
