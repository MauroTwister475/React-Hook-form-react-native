import { Link } from "expo-router";
import { Text } from "react-native";
import { colors } from "@/styles/colors";
import { TouchableOpacity } from "react-native";

export function ButtonStart() {

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet[800],
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 8,
      }}
      activeOpacity={0.8}
    >
      <Link href="/signup" className="w-full text-center">
        <Text className="text-white w-full text-lg font-bold">Começar</Text>
      </Link>
    </TouchableOpacity>
  );
}