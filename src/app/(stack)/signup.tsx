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
      <TopSheetUI flex={1}>
        <UserPlus color="#fff" size={80} />
      </TopSheetUI>
      <BottomSheetUI flex={3}>
        <View className="gap-4 flex-col justify-between">
          <Title size="md" title="Cadastre-se" />
          <FormInputs />
        </View>
      </BottomSheetUI>
    </View>
  );
}