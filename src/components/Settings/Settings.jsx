import React from "react";
import Cleardata from "./ClearData";
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
          <Cleardata />
        </div>
      </div>
      <div id="side"></div>
    </>
  );
};

export default Settings;
