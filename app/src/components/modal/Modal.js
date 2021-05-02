import { Children } from "react";
import "./Modal.css";

const Modal = ({ children, isOpenModal, closeModal }) => {
  return (
    <article className={`modal ${isOpenModal && "is-open"}`}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
