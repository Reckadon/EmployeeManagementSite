import React, { useEffect, useState } from "react";
import Store from "../../DataStorage";

const ExportData = () => {
  const [encodedEmployees, setEncodedEmployees] = useState(null);

  useEffect(() => {
    let encoded = "data:text/json;charset=utf-8,"; //for download
    encoded += encodeURIComponent(
      JSON.stringify(Store.getEmployees(), undefined, 4)
    );
    setEncodedEmployees(encoded);
  }, []);
  return (
    <fieldset>
      <legend>
        Export Data <i className="fa fa-file-export"></i>
      </legend>
      <div className="settingsRow">
        <span>Copy or Download Employees data as JSON: </span>
        <button
          className="sideButton"
          title="Copy"
          onClick={() => {
            navigator.clipboard.writeText(
              JSON.stringify(Store.getEmployees(), undefined, 4)
            );
          }}>
          <i className="fas fa-copy"></i>
        </button>
        <a
          className="sideButton"
          href={encodedEmployees}
          download="EmployeesData.json"
          title="Download">
          <i className="fas fa-file-download"></i>
        </a>
      </div>
    </fieldset>
  );
};

export default ExportData;
