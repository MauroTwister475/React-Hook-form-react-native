import { Image, Text, View } from "react-native";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { ButtonStart } from "@/components/buttons/button-start";
import { Title } from "@/components/title";
import { TopSheetUI } from "@/components/top-sheet";
import { colors } from "@/styles/colors";

export default function Home() {
  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: colors.violet[800],
      }}
    >
      <TopSheetUI flex={3}>
        <Image source={require("@/assets/ipil.png")} className="w-40 h-40" />
      </TopSheetUI>
      <BottomSheetUI flex={2}>
        <View className="gap-4 flex-col mt-4">
          <Title size="lg" title="Bem-vindo IPIL High School Quiz" />
          <Text className="text-slate-900 text-lg text-justify">
            Um jogo divertido sobre o IPIL. Jogue agora e teste os teus
            conhecimentos sobre o IPIL🏨. 
            Vamos lá, Makarenquista!🔥🚩
          </Text>
        </View>
        <ButtonStart />
      </BottomSheetUI>
    </View>
  );
}