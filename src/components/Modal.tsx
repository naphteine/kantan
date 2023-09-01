export default function Modal() {
  return (
    <>
      <h1>I am a Modal!</h1>
    </>
  );
}

/*
"use client";

import React, { ReactNode, MouseEvent, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import { CiCircleRemove } from "react-icons/ci";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const handleCloseClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClose();
    },
    [onClose]
  );

  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const modalContent = (
    <div className={styles.modal_overlay} onClick={handleBackdropClick}>
      <div className={styles.modal_wrapper}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            {title && <h1>{title}</h1>}
            <a href="#" onClick={handleCloseClick}>
              <CiCircleRemove className={styles.remove} size={32} />
            </a>
          </div>
          <div className={styles.modal_body}>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
*/
