import { useEffect } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { TopSheetUI } from "@/components/top-sheet";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { Title } from "@/components/title";
import { Categories } from "@/components/category";
import { ButtonMenu } from "@/components/buttons/button-menu";
import { ButtonPrimary } from "@/components/buttons/button-primary";
import { useUser } from "@/stores/useUser";
import { useSelectedCategory } from "@/stores/useSelectedCategory";
import { useResetAllData } from "@/utils/ResetAllData";
import { useResetCategories } from "@/utils/ResetCategoryName";

export default function Welcome() {
  const router = useRouter();
  const resetAllData = useResetAllData();
  const resetCategoriesData = useResetCategories();

  const { user } = useUser();
  const { selectedCategory } = useSelectedCategory();

  useEffect(() => {
    resetCategoriesData();
  }, [])

  function onStartGame() {
    if (selectedCategory !== undefined) {
      resetAllData();
      router.navigate("/new-game");
    } else {
      alert("Você precisa escolher uma categoria!");
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-violet-800">
      <TopSheetUI flex={1} className="items-center px-4 ">
        <ButtonMenu />
        <View className="w-full flex-col justify-between gap-4 px-0">
          <Title
            size="lg"
            theme="light"
            title={`Bem-vindo ${user.username ?? "Makarenquista"}`}
          />
          <Title
            theme="light"
            size="sm"
            title="Clique no botão 'abaixo' para começar um novo Jogo!"
          />
        </View>
      </TopSheetUI>
      <BottomSheetUI flex={2}>
        <Categories />
        <ButtonPrimary
          size="full"
          title="Começar jogo!"
          onPress={onStartGame}
        />
      </BottomSheetUI>
    </View>
  );
}
