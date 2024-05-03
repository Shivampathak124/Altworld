
import React from "react";

function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Create New Assignment</h2>
       
      </div>
    </div>
  );
}

export default Modal;
