import { Text, View } from "react-native";
import { TopSheetUI } from "@/components/top-sheet";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { ButtonMenu } from "@/components/buttons/button-menu";
import { Title } from "@/components/title";

export default function Welcome() {

  const username = "Dennis" 

  return (
    <View className="flex-1 items-center justify-center bg-violet-800">
      <TopSheetUI flex={1} className="items-center px-4 ">
        <ButtonMenu />
        <View className="w-full flex-col justify-between gap-4 px-0">
          <Title
            size="lg"
            theme="light"
            title={`Bem-vindo ${username ?? "Makarenquista"}`}
          />
          <Title
            theme="light"
            size="sm"
            title="Clique no botão 'abaixo' para começar um novo Jogo!"
          />
        </View>
      </TopSheetUI>
      <BottomSheetUI flex={2}>
        <Text>Ola mundo</Text>
      </BottomSheetUI>
    </View>
  );
}
