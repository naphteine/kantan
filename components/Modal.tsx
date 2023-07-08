import React, { ReactNode, MouseEvent } from "react";
import ReactDOM from "react-dom";

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
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
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
