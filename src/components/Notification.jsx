import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles/notification.css";

const Notification = ({ children, time, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, time);
    return () => clearTimeout(timer);
  });

  return ReactDOM.createPortal(
    <div
      id="notification"
      style={{
        animation: `hover-in 400ms cubic-bezier(0.25, 0.1, 0.41, 1.26) forwards , hover-out 200ms ${
          time - 200
        }ms cubic-bezier(0.63,-0.38, 0.48, 1.01)`,
      }}>
      {children}
      <div
        className="timeoutBar"
        style={{ animation: `shrink ${time}ms linear forwards` }}
      />
    </div>,
    document.getElementById("portal")
  );
};
export default Notification;
