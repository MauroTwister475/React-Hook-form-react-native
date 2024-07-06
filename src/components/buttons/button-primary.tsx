import { colors } from "@/styles/colors";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text } from "react-native";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
  logout?: boolean;
  size?: "full" | "md";
}

export function ButtonPrimary({ title, size = "full", logout, ...rest }: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      style={[
        {
          width: size === "full" ? "100%": "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.violet[800],
          paddingHorizontal: 18,
          paddingVertical: 12,
          borderRadius: 8,
        },
        logout && style.logoutButton,
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text className="text-white text-center font-bold text-md">{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  buttonPrimary: {},
  logoutButton: {
    marginTop: 20,
  },
});
