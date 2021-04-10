import React, { useEffect, useRef, useState } from "react";
import Notification from "../Notification";
import Modal from "../Modal";
import Store from "../../DataStorage";

const Cleardata = () => {
  const [notif, setNotif] = useState(null);
  const [showClearModal, setShowClearModal] = useState(false);
  const yesBtn = useRef();

  useEffect(() => {
    if (showClearModal) yesBtn.current.focus();
  }, [showClearModal]);

  const handleClearData = () => {
    setShowClearModal(false);
    Store.setEmployees([]); //empty employees array
    setNotif("Cleared Employees Data!");
  };

  return (
    <fieldset>
      <legend>
        Clear Data
        <i className="fa fa-dumpster-fire" style={{ paddingLeft: "17px" }}></i>
      </legend>
      <div className="settingsRow">
        <span>Clear Employees data : </span>
        <button
          className="sideButton clearButton"
          title="Clear"
          onClick={() => setShowClearModal(true)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
      {notif && (
        <Notification time={5000} onClose={() => setNotif(null)}>
          {notif}
        </Notification>
      )}
      {showClearModal && (
        <Modal onClose={() => setShowClearModal(false)}>
          <div>
            <h2 style={{ textAlign: "center" }}>
              Are you sure you want to clear all employees' data?
            </h2>
            <button ref={yesBtn} onClick={handleClearData}>
              Yes
            </button>
            <button onClick={() => setShowClearModal(false)}>No</button>
          </div>
        </Modal>
      )}
    </fieldset>
  );
};

export default Cleardata;
