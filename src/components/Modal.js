import React from "react";
import closeImg from "../images/close.png";

function Modal({ show, children, closeModal }) {

  return (
    <div
      className="modal"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-wrapper">
        <button onClick={closeModal} className="close-button">
          <img src={closeImg} alt="close-button" />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
