import React from "react";
import { useGlobalContext } from "../../context";
// import ChoiceLists from "./Modal/ChoiceLists";
import Form from "./Form";
import { MdClose } from "react-icons/md";
import "./Modal.css";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
      
    >
      <div className="modal-container">
        <Form />
        
        <button className="close-modal-btn" onClick={closeModal}>
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
