import { useEffect } from "react";
import { View, Text } from "react-native";
import { ButtonGoout } from "@/components/buttons/button-logout";
import { ButtonTryAgain } from "@/components/buttons/button-try-again";
import { usePoints } from "@/stores/usePoints";
import { WinAnimation } from "@/lotties/win";
import { useSelectedIndex } from "@/stores/useSelectedIndex";
import { FinishGame } from "@/sounds/finish";

export function WinGame() {
  const { points } = usePoints();
  const { onSetSelectedIndex } = useSelectedIndex();

  useEffect(() => {
    onSetSelectedIndex(0);
  }, [])

  return (
    <View className="flex-col items-center justify-between h-full">
      <FinishGame />
      <WinAnimation />
      <Text className="text-2xl font-semibold text-center text-slate-900">
        Parabéns! Você ganhou o jogo com a pontuação máxima de {points} {" "}
        pontos
      </Text>
      <View className="w-full flex-row items-center gap-4">
        <ButtonGoout />
        <ButtonTryAgain size="md" title="Jogar novamente" />
      </View>
    </View>
  );
}
