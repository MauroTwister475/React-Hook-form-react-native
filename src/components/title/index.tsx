import { Text, TextProps } from "react-native";
import clsx from "clsx";

interface TitleProps extends TextProps {
  size: "sm" | "lg" | "md";
  theme?: "light" | "dark"
  title: string;
  description?: string;
}

export function Title({ title, description, theme = "dark", size, ...rest }: TitleProps) {
  return (
    <Text
      className={clsx("w-full font-normal text-center mb-4 ", {
        "text-base": size === "sm",
        "text-xl font-semibold": size === "md",
        "text-2xl font-bold": size === "lg",
        "text-slate-900 ": theme === "dark",
        "text-gray-400": theme === "light",
      })}
      {...rest}
    >
      {title}
      {description}
    </Text>
  );
}
