import { View } from "react-native";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { FormInputs } from "@/components/forms/input-form";
import { TopSheetUI } from "@/components/top-sheet";
import { colors } from "@/styles/colors";
import { UserPlus } from "lucide-react-native";
import { Title } from "@/components/title";

export default function SignUp() {
  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: colors.violet[800],
      }}
    >
      <View className="w-full flex-1 bg-zinc-900 items-center justify-center px-6">
        <Title size="lg" title="Sign in to your account" theme="light" />
        <FormInputs />
      </View>
    </View>
  );
}
