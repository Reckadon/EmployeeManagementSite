/* 
    id
    first name
    last name
    age 
    salary
    designation
    gender
    telephone number
    email address
    onLeave
    date employed
*/

class Employee {
  constructor({
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
  }) {
    this.id = id;
    this.fName = fName.toLowerCase();
    this.lName = lName.toLowerCase();
    this.age = age;
    this.salary = salary;
    this.designation = designation;
    this.gender = gender;
    this.number = number;
    this.email = email;
    this.onLeave = onLeave;
    if (dateEmployed === "now") {
      const currentTime = new Date();
      const month = currentTime.getMonth() + 1;
      const day = currentTime.getDate();
      const year = currentTime.getFullYear();
      const dateEmployed = day + "/" + month + "/" + year;
      this.dateEmployed = dateEmployed;
    } else {
      this.dateEmployed = dateEmployed;
    }
  }
  getFullName() {
    return this.fName + " " + this.lName;
  }
}
export default Employee;
