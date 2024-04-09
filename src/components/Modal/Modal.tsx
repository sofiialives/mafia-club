import React, { ReactNode, useEffect } from "react";
import Close from "../../../public/icons/close.svg";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative rounded-3xl bg-white p-6  max-w-screen-sm max-h-screen-sm">
            <button
              onClick={onClose}
              className="flex justify-center items-center w-8 h-8 rounded-lg  bg-slate-200 absolute top-4 right-4"
            >
              <Close />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
