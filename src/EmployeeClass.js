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
  constructor(
    id,
    fName,
    lName,
    age,
    salary,
    designation,
    gender,
    number,
    email,
    onLeave
  ) {
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.salary = salary;
    this.designation = designation;
    this.gender = gender;
    this.number = number;
    this.email = email;
    this.onLeave = onLeave;
    const currentTime = new Date();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    const year = currentTime.getFullYear();
    const dateEmployed = day + "/" + month + "/" + year;
    this.dateEmployed = dateEmployed;
  }
  getFullName() {
    return this.fName + " " + this.lName;
  }
}
export default Employee;
