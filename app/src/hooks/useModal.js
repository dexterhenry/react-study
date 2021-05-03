import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => {
    document.body.classList.add("block-scroll");
    setIsOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("block-scroll");
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
};
