import { create } from "zustand";

interface ModalProps {
  isOpen: boolean;
  onSetIsOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalProps>((set) => ({
  isOpen: false,
  onSetIsOpen: (isOpen: boolean) =>
    set((state) => ({
      isOpen: isOpen,
    })),
}));
