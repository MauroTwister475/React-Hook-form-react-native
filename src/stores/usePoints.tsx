import { create } from "zustand";

interface PointsProps {
  points: number;
  onSetPoints: (points: number) => void;
}

export const usePoints = create<PointsProps>((set) => ({
  points: 0,
  onSetPoints: (point: number) =>
    set((state) => ({
      points: point,
    })),
}));
