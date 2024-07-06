import { create } from "zustand";
import { CategoryType } from "@/constants/categories";

interface SelectedCategoryProps {
  selectedCategory: CategoryType;
  onSelectedCategory: (selectedCategory: CategoryType) => void;
}

export const useSelectedCategory = create<SelectedCategoryProps>((set) => ({
  selectedCategory: {
    name: "React",
    icon: require("@/assets/react.png")
  },
  onSelectedCategory: (category: CategoryType) =>
    set((state) => ({
      selectedCategory: category,
    })),
}));
