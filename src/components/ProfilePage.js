import React from "react";

const getFormattedName = (match) => {
  let name = match.params.name;
  name = name.slice(0, -2);
  let formatted = name.slice(0, name.indexOf("-"));
  formatted += " " + name.slice(name.indexOf("-") + 1);
  return formatted;
};

const ProfilePage = ({ match }) => {
  return (
    <div>
      <h3>{getFormattedName(match)}</h3>
    </div>
  );
};

export default ProfilePage;
