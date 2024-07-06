import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { colors } from "@/styles/colors";

interface ButtonSignUpProps extends TouchableOpacityProps {
  isSubmitting?: boolean,
}

export function ButtonSignUp({ isSubmitting, ...rest }: ButtonSignUpProps) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet[800],
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10,
        shadowOpacity: isSubmitting ? 0.1 : 1,
      }}
      activeOpacity={0.4}
      {...rest}
    >
      <Text className="text-white text-center font-bold text-lg">
        {isSubmitting ? "Carregando..." : "Login"}
      </Text>
    </TouchableOpacity>
  );
}
