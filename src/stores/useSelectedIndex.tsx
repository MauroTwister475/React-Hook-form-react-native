import { create } from "zustand";

interface selectedIndexProps {
  selectedIndex: number;
  onSetSelectedIndex: (selectedIndex: number) => void;
}

export const useSelectedIndex = create<selectedIndexProps>((set) => ({
  selectedIndex: 0,
  onSetSelectedIndex: (selectedIndex: number) =>
    set((state) => ({
      selectedIndex: selectedIndex,
    })),
}));
