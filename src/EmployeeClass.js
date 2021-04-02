/* 
    id
    first name
    last name
    designation
    gender
    age 
    salary
    onLeave
    telephone number
    email address
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
  getFormattedDate() {
    let date = this.dateEmployed;
    let formattedDate = date.slice(0, date.indexOf("/"));
    date = date.slice(date.indexOf("/") + 1);
    formattedDate += " " + this.getMonthName(date.slice(0, date.indexOf("/")));
    date = date.slice(date.indexOf("/") + 1);
    return formattedDate + " " + date;
  }
  getMonthName = n => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[n - 1];
  };
}
export default Employee;
