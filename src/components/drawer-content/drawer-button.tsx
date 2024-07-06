import { View, Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import clsx from "clsx";

export type IconType = keyof typeof MaterialIcons.glyphMap;

interface DrawerButtonProps extends PressableProps {
  title?: string;
  isFocused: boolean;
  icon: IconType;
}

export function DrawerButton({
  isFocused = false,
  icon,
  title,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable {...rest}>
      <View
        className={clsx("w-full  flex-row items-center gap-6 p-4", {
          "bg-violet-800": isFocused,
          "bg-white": !isFocused,
        })}
      >
        <MaterialIcons
          name={icon}
          size={24}
          color={!isFocused ? colors.violet[800] : colors.white}
        />
        <Text
          className={clsx("text-violet-800 text-lg", {
            "text-white": isFocused,
            "text-violet-800": !isFocused,
          })}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}