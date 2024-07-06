import { create } from "zustand";

interface LostGameProps {
  lostGame: boolean;
  onSetLostGame: (lostGame: boolean) => void;
}

export const useStateGame = create<LostGameProps>((set) => ({
  lostGame: false,
  onSetLostGame: (lostGame: boolean) =>
    set((state) => ({
      lostGame: lostGame,
    })),
}));
