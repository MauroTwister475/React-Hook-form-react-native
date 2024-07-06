import { create } from "zustand";

interface WinGameProps {
  winGame: boolean;
  onSetWinGame: (winGame: boolean) => void;
}

export const useWinGame = create<WinGameProps>((set) => ({
  winGame: false,
  onSetWinGame: (winGame: boolean) =>
    set((state) => ({
      winGame: winGame,
    })),
}));
