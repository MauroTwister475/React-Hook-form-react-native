import { create } from "zustand";

interface User {
  username: string;
}

interface TimesProps {
  user: User;
  onSetUser: (user: User) => void;
}

export const useUser = create<TimesProps>((set) => ({
  user: {
    username: "Mauro Twister",
  },
  onSetUser: (user: User) =>
    set((state) => ({
      user: user,
    })),
}));
