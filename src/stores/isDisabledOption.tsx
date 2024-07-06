import { create } from "zustand";

interface DisabledProps {
  isDisabled: boolean;
  onSetIsDisabled: (isDisabled: boolean) => void;
}

export const useDisabledStore = create<DisabledProps>((set) => ({
  isDisabled: false,
  onSetIsDisabled: (isDisabled: boolean) =>
    set((state) => ({
      isDisabled: isDisabled,
    })),
}));
