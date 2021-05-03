import "./Modal.css";

const Modal = ({ children, isOpenModal, closeModal }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      className={`modal ${isOpenModal && "is-open"}`}
      onClick={closeModal}
    >
      <div className="modal-container" onClick={handleClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
