import { View } from "react-native";
import { usePoints } from "@/stores/usePoints";
import { useStateGame } from "@/stores/useLostGame";
import { ButtonTryAgain } from "@/components/buttons/button-try-again";
import { ButtonGoout } from "@/components/buttons/button-logout";
import { ScoreInfo } from "./score-info";

const infoScore = [
  "Não foi dessa vez! Continue praticando e tente novamente. Você consegue!",
  "Muito bem! Você está quase lá. Mais um pouco de prática e você vai alcançar a perfeição!",
  "Excelente trabalho! Você está a um passo da vitória. Continue assim!",
];

export function Score() {
  const { points } = usePoints();
  const { lostGame } = useStateGame();

  return (
    <View className="w-full h-full items-center flex-col justify-between gap-5 px-4">
      {lostGame && points >= 0 && points <= 5 && (
        <ScoreInfo message={infoScore[0]} />
      )}
      {lostGame && points >= 6 && points <= 10 && (
        <ScoreInfo message={infoScore[1]} />
      )}
      {lostGame && points >= 11 && points <= 14 && (
        <ScoreInfo message={infoScore[2]} />
      )}
      {lostGame && points >= 15 && points <= 20 && (
        <ScoreInfo message={infoScore[2]} />
      )}
      <View className="w-full flex-row items-center gap-4">
        <ButtonGoout />
        <ButtonTryAgain title="Jogar novamente" size="md" />
      </View>
    </View>
  );
}
