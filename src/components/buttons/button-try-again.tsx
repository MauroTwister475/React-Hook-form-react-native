import { useRouter } from "expo-router";
import { useResetAllData } from "@/utils/ResetAllData";
import { useSelectedCategory } from "@/stores/useSelectedCategory";
import { ButtonPrimary } from "@/components/buttons/button-primary";

interface ButtonTryAgainProps { title: string, size: "full" | "md"}

export function ButtonTryAgain({ title, size }: ButtonTryAgainProps) {
  const router = useRouter();
  const resetAllData = useResetAllData();
  const { selectedCategory, onSelectedCategory } = useSelectedCategory();

  function onTryAgain() {
    resetAllData();
    onSelectedCategory(selectedCategory);
    router.navigate("/new-game");
  }

  return <ButtonPrimary size={size} title={title} onPress={onTryAgain} />;
}
