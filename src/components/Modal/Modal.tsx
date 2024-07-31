// hooks
import { useEffect, ReactNode } from "react";

// styles
import {
  CloseButton,
  ModalOverlay,
  ModalHeader,
  ModalContent,
} from "./modal.style";

// Modal Detail Props
interface MProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: MProps) {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay
        onClick={onClose}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <ModalHeader
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          More Detail
        </ModalHeader>
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CloseButton onClick={onClose}>⨉</CloseButton>
          {children}
        </ModalContent>
      </ModalOverlay>
    </>
  );
}

export default Modal;
