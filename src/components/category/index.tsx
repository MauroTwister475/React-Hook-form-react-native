import { View } from "react-native";
import { CATEGORIES, CategoryType } from "@/constants/categories";
import { CategoryItem } from "@/components/category/category-item";
import { useSelectedCategory } from "@/stores/useSelectedCategory";

export function Categories() {
  const { selectedCategory, onSelectedCategory  } = useSelectedCategory();

  function handleSelectedcategory(category: CategoryType) {
    onSelectedCategory(category);
  }

  return (
    <View className="flex-col gap-4">
      {CATEGORIES.map((tech) => (
        <CategoryItem
          key={tech.id}
          category={tech}
          icon={tech.icon}
          isSelected={tech.name === selectedCategory.name}
          onPress={() => handleSelectedcategory(tech)}
        />
      ))}
    </View>
  );
}
