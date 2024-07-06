import { useSelectedCategory } from "../stores/useSelectedCategory";

export function useResetCategories() {
  const { onSelectedCategory, selectedCategory } = useSelectedCategory();

  function resetCategoryData() {
    onSelectedCategory({
      name: "IPIL High School",
      icon: require("../assets/ipil.png"),
    });
  }

  return resetCategoryData;
}
