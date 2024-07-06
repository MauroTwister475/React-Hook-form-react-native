import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

interface BottomSheeetUIProps extends ViewProps {
  children: ReactNode;
  className?: string;
  flex: number;
}
export function BottomSheetUI({
  children,
  flex = 2,
  className,
  ...rest
}: BottomSheeetUIProps) {
  return (
    <View
      className={twMerge("w-full bg-zinc-900 items-center justify-center", className)}
      style={{
        flex: flex,
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: 28,
        paddingHorizontal: 20,
        justifyContent: "space-between",
      }}
      {...rest}
    >
      {children}
    </View>
  );
}
