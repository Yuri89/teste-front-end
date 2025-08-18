import { createContext, useState, useContext, type ReactNode } from "react";
import CardModal from "../../Components/CardModal";

// Define a interface para o contexto
interface ModalContextType {
  component: ReactNode | null;
  isOpen: boolean;
  openModal: (component: ReactNode) => void;
  closeModal: () => void;
}

// Cria o contexto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider do contexto
export function ModalProvider({ children }: { children: ReactNode }) {
  const [component, setComponent] = useState<ReactNode | null>(<CardModal/>);
  const [isOpen, setIsOpen] = useState(true);

  const openModal = (newComponent: ReactNode) => {
    setComponent(newComponent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setComponent(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ component, isOpen, openModal, closeModal }}>
      {children}
      {isOpen && component}
    </ModalContext.Provider>
  );
}

// Hook para usar o contexto
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro de um ModalProvider");
  }
  return context;
}
