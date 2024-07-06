import { View } from "react-native";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { FormInputs } from "@/components/forms/input-form";
import { Title } from "@/components/title";
import { TopSheetUI } from "@/components/top-sheet";
import { colors } from "@/styles/colors";
import { UserPlus } from "lucide-react-native";

export default function SignUp() {

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: colors.violet[800],
      }}
    >
      <TopSheetUI flex={3}>
        <UserPlus color="#fff" size={80} />
      </TopSheetUI>
      <BottomSheetUI flex={2}>
        <View className="gap-4 flex-col justify-between">
          <Title size="md" title="Cadastre-se" />
          <FormInputs />
        </View>
      </BottomSheetUI>
    </View>
  );
}