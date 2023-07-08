import React, { ReactNode, MouseEvent } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const handleCloseClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_wrapper}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
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
