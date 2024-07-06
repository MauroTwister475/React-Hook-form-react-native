import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { twMerge } from "tailwind-merge";
import { colors } from "@/styles/colors";

interface LogoProps {
  className?: string;
  sizeIcon?: number;
  color?: string;
}

export function Logo({
  className,
  color = colors.white,
  sizeIcon = 70,
}: LogoProps) {
  return (
    <View
      className={twMerge(
        "items-center justify-center flex-row gap-2",
        className
      )}
    >
      <Image source={require("@/assets/ipil.png")} className="w-12 h-12" />
      <Link href="/">
        <Text
          className={twMerge("font-semibold text-white text-2xl", className)}
        >
          Quiz IPIL 
        </Text>
      </Link>
    </View>
  );
}
