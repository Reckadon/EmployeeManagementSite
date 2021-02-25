import React from "react";
import Store from "../DataStorage";
import "./styles/ProfilePage.css";

const ProfilePage = ({ match }) => {
  const name = match.params.name;
  const id = Number(name.slice(-1));

  const Employee = Store.getEmployeeByID(id);
  return (
    <React.Fragment>
      <div id="main">
        <section className="ProfileSection">
          <h2>{Employee.getFullName()}</h2>
        </section>
      </div>
      <div id="side"></div>
    </React.Fragment>
  );
};

export default ProfilePage;
