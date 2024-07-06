import { ReactNode } from "react";
import { View } from "react-native";
import { colors } from "@/styles/colors";
import { twMerge } from "tailwind-merge";

interface TopSheeetUIProps {
  children: ReactNode;
  className?: string;
  flex?: number;
}
export function TopSheetUI({ children, className, flex }: TopSheeetUIProps) {
  return (
    <View
      className={twMerge('', className)}
      style={{
        flex: flex,
        width: "100%",
        backgroundColor: colors.violet[800],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
}
