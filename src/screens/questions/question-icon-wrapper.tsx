import { View, Text } from "react-native";
import { ElementType } from "react";
import { colors } from "@/styles/colors";
import { twMerge } from "tailwind-merge";

interface QuestionIconWrapperProps {
  title: string;
  icon: ElementType,
  color?: string
  className?: string
}

export function QuestionIconWrapper({ icon: Icon, className, title, color = colors.violet[800]  }: QuestionIconWrapperProps) {
  return (
    <View className={twMerge('flex-row items-center justify-centrer gap-2 w-max px-2 py-1', className)}>
      <Icon color={color} size={18} />
      <Text className="text-lg text-gray-400">{title}</Text>
    </View>
  );
}
