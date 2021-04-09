import React, { useRef, useState } from "react";
import Store from "../../DataStorage";
import Notification from "../Notification";

const ImportData = () => {
  const [notif, setNotif] = useState(null);
  const fileInput = useRef();

  const handleFileUpload = async () => {
    const file = fileInput.current.files[0];
    if (file === undefined) return; //when upload cancelled
    if (file.type === "application/json") processText(await file.text());
    else setNotif("Only JSON files Please!");
  };

  const processText = text => {
    const obj = JSON.parse(text);
    if (obj.hasOwnProperty("id") && obj.hasOwnProperty("employees")) {
      Store.setData(obj);
      setNotif("Imported Data Successfully!");
    } else setNotif("Invalid Employees Data File!");
  };

  return (
    <fieldset>
      <legend>
        Import Data
        <i className="fa fa-file-import" style={{ paddingLeft: "3px" }}></i>
      </legend>
      <div className="settingsRow">
        <span>Upload Employees data as JSON File: </span>
        <button
          onClick={() => fileInput.current.click()} //clicking the file input
          className="sideButton"
          title="Upload">
          <i className="fas fa-file-upload"></i>
        </button>
        <input
          accept=".json"
          ref={fileInput}
          type="file"
          style={{ display: "none" }}
          onInput={handleFileUpload}
        />
      </div>
      {notif && (
        <Notification time={5000} onClose={() => setNotif(null)}>
          {notif}
        </Notification>
      )}
    </fieldset>
  );
};

export default ImportData;
