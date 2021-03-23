import { ReactNode } from "react";
import ReactModal from "react-modal";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={() => setIsOpen(false)}
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          maxWidth: "736px",
          width: "90%",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
