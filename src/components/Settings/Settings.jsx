import React from "react";
import ExportData from "./ExportData";
import ImportData from "./ImportData";
import "./styles/settings.css";
const Settings = () => {
  return (
    <>
      <div id="main">
        <div className="settingsDiv">
          <ImportData />
          <ExportData />
        </div>
      </div>
      <div id="side"></div>
    </>
  );
};

export default Settings;
