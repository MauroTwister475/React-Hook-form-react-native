import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { colors } from "@/styles/colors";

export function ButtonSignUp({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet[800],
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 18,
      }}
      activeOpacity={0.4}
      {...rest}
    >
      <Text className="text-white text-center font-bold text-lg">
        Iniciar
      </Text>
    </TouchableOpacity>
  );
}
