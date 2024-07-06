import { View } from "react-native";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/Toast";
import { QUESTIONS } from "@/constants/questions";
import { usePoints } from "@/stores/usePoints";
import { useResetAllData } from "@/utils/ResetAllData";
import { Score } from "@/screens/score";
import { useStateGame } from "@/stores/useLostGame";
import { WinGame } from "../win-game";
import { useWinGame } from "@/stores/useWinGame";
import { useSelectedIndex } from "@/stores/useSelectedIndex";
import { useDisabledStore } from "@/stores/isDisabledOption";
import { LostGame as IncorretQuestion } from "@/sounds/lost";
import { CorrectQuestion } from "@/sounds/win";
import { QuestionContent } from "./question-content";
import { useSelectedCategory } from "@/stores/useSelectedCategory";

export function Questions() {
  const { onSetWinGame, winGame } = useWinGame();
  const resetAllData = useResetAllData();

  const { toast } = useToast();
  const { lostGame, onSetLostGame } = useStateGame();

  const { selectedCategory, onSelectedCategory } = useSelectedCategory();
  const { onSetPoints, points } = usePoints();
  const { onSetSelectedIndex, selectedIndex } = useSelectedIndex();
  const { onSetIsDisabled } = useDisabledStore();

  const [correct, setCorrect] = useState(false);
  const [Incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    onSetPoints(0);
  }, []);

  function onSelectOption(isCorrect: boolean) {
    onSetIsDisabled(true);
    try {
      if (isCorrect) {
        setTimeout(() => {
          setCorrect(true);
          
          setTimeout(() => {
            toast("Resposta Certa!", "success", 1800);
            onSetPoints(points + 1);

            if (points === QUESTIONS[selectedCategory.name].length - 1) {
              onSetWinGame(true);
            }

            const nextQuestionIndex = selectedIndex + 1;
            if (nextQuestionIndex < QUESTIONS[selectedCategory.name].length) {
              onSetIsDisabled(false);
              onSetSelectedIndex(nextQuestionIndex);
            }
          }, 1000);
        }, 2000);
      } else {
        setTimeout(() => {
          setIncorrect(true);
          setTimeout(() => {
            toast("Resposta Errada!", "destructive", 1500);
            resetAllData();
            onSetLostGame(true);
            onSelectedCategory(selectedCategory);
            onSetSelectedIndex(0);
          }, 1800);
        }, 1500);
      }
    } catch (error) {
      alert("Error: " + error);
    } finally {
      setCorrect(false);
      setIncorrect(false);
    }
  }

  return (
    <View className="w-full h-full items-center gap-4">
      {winGame && <WinGame />}
      {correct && <CorrectQuestion />}
      {Incorrect && <IncorretQuestion />}
      {lostGame && <Score />}
      {!lostGame && !winGame && (
        <QuestionContent
          onSelectOption={onSelectOption}
          questions={QUESTIONS}
        />
      )}
    </View>
  );
}