import { Pressable, Text, PressableProps, View, Image } from "react-native";
import { CategoryType } from "@/constants/categories";
import clsx from "clsx";

interface CategoryItemProps extends PressableProps {
  category: CategoryType;
  isSelected?: boolean;
  icon: any;
}

export function CategoryItem({
  category,
  isSelected,
  icon: Icon,
  ...props
}: CategoryItemProps) {
  return (
    <Pressable
      style={{
        width: "100%",
        height: 62,
        borderRadius: 16,
      }}
      {...props}
    >
      <View
        className={clsx("w-full h-full py-2.5 items-center justify- px-4 flex-row rounded-lg bg-gray-200 gap-2",
          {
            "bg-violet-800 ": isSelected,
            "borner-none": !isSelected,
          }
        )}
      >
        <Image source={Icon} className="w-14 h-14" />
        <Text 
          className={clsx('font-semibold text-xl', {
            'text-white': isSelected,
            'text-slate-900': !isSelected
          })}>
          {category.name}
        </Text>
      </View>
    </Pressable>
  );
}
