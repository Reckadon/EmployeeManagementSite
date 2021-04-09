import React from "react";
import ReactDOM from "react-dom";
import "./styles/modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div id="modalOverlay" onClick={onClose}></div>
      <div id="modal">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
