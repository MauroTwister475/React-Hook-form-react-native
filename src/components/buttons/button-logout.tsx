import { useRouter } from "expo-router";
import { ButtonPrimary } from "@/components/buttons/button-primary";
import { useResetAllData } from "@/utils/ResetAllData";

export function ButtonGoout() {
  const router = useRouter();
  const resetAlldata = useResetAllData();

  function onLeftToMenu() {
    resetAlldata();
    router.back();
  }

  return <ButtonPrimary size="md" title="Sair" onPress={onLeftToMenu} />;
}
