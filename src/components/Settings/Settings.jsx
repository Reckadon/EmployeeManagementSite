import React from "react";
import ExportData from "./ExportData";
import "./styles/settings.css";
const Settings = () => {
  return (
    <>
      <div id="main">
        <div className="settingsDiv">
          <ExportData />
        </div>
      </div>
      <div id="side"></div>
    </>
  );
};

export default Settings;
