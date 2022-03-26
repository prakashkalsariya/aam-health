import React, { useEffect } from "react";
import styles from "./styles/Modal.module.scss";

interface IModal {
  children: React.ReactChild;
  open: boolean;
  classes?: {
    contentContainer?: string;
    backdrop?: string;
    modalContainer?: string;
  };
  handleClose: () => void;
}

const Modal = ({ children, open, classes, handleClose }: IModal) => {
  useEffect(() => {
    const modalContent = document.querySelector(`#modal-content`);

    const closeErrorButtons = document.querySelectorAll(`.close-error-button`);

    console.log(closeErrorButtons);
    let closeHandler = (e: any) => {
      if (closeErrorButtons?.length) {
        let isReturn = false;
        closeErrorButtons.forEach((button) => {
          if (button?.contains(e.target as Node)) {
            isReturn = true;
          }
        });

        if (isReturn) return;
      }

      if (!modalContent?.contains(e.target as Node)) {
        handleClose();
      }
    };
    if (open) {
      // const searchInputContainer = document.querySelector(
      //   `.search-input-container-${type}`
      // );
      document.addEventListener("click", closeHandler);
    }
    return () => document.removeEventListener("click", closeHandler);
  }, [open]);

  return (
    <div
      className={`${styles.modalContainer} ${classes?.modalContainer ?? ""} ${
        open ? styles.open : ""
      }`}
    >
      <div
        className={`${styles.modal_backdrop} ${classes?.backdrop ?? ""}`}
      ></div>
      <div
        className={`${styles.modal_content}  ${
          classes?.contentContainer ?? ""
        }`}
        id="modal-content"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
