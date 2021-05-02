import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}> Modal 1</button>
      <Modal isOpenModal={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo
          maxime quibusdam. Inventore itaque facere ratione! Nihil beatae
          pariatur quisquam assumenda atque sapiente vel est necessitatibus!
          Nihil aliquam totam nisi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro saepe animi sapiente deserunt dignissimos
          possimus nam autem provident ipsa dolores? Mollitia nam ex illum est
          cum maxime libero, reprehenderit aperiam?
        </p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
    </div>
  );
};

export default Modals;
