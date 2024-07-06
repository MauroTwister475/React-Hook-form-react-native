import { View, Text } from "react-native";
import { QuestionsType } from "@/constants/questions";
import { useSelectedCategory } from "@/stores/useSelectedCategory";
import { useSelectedIndex } from "@/stores/useSelectedIndex";
import { QuestionIconWrapper } from "./question-icon-wrapper";
import { Star } from "lucide-react-native";
import { colors } from "@/styles/colors";
import { usePoints } from "@/stores/usePoints";
import { QuestionTitle } from "./question-title";
import { ButtonPrimary } from "@/components/buttons/button-primary";
import { ModalConfirm } from "@/components/modals/modal-confirm";
import { QuestionItem } from "./question-item";
import { useModalStore } from "@/stores/useModalStore";

interface QuestionContentProps {
  questions: QuestionsType;
  onSelectOption: (isCorrect: boolean) => void;
}

export function QuestionContent({ onSelectOption, questions}: QuestionContentProps) {
  const { points } = usePoints();
  const { selectedCategory } = useSelectedCategory();

  const { selectedIndex } = useSelectedIndex();
  const { isOpen, onSetIsOpen } = useModalStore();

  const currentQuestion = questions[selectedCategory.name][selectedIndex];

  return (
    <>
      <View className="w-full h-full flex-col justify-between">
        <View className="flex-col gap-3">
          <View className="w-full border-b border-gray-300 flex-row items-center justify-between pb-2">
            <Text className="text-lg text-gray-400">
              Questão {selectedIndex + 1} {"de "}
              {questions[selectedCategory.name].length}
            </Text>
            <QuestionIconWrapper
              icon={Star}
              color={colors.violet[800]}
              title={String(points)}
            />
          </View>
          <QuestionTitle
            title={
              questions[selectedCategory.name][selectedIndex].question
            }
          />
        </View>
        <View className="w-full flex-col gap-4 items-center justify-center pt-2">
          {currentQuestion.options.map((option, index) => (
            <QuestionItem
              key={index}
              letter={option.letter}
              question={option.resp}
              onPress={() => onSelectOption(option.correct)}
            />
          ))}
        </View>
        <ButtonPrimary
          logout
          title="Terminar jogo"
          onPress={() => onSetIsOpen(true)}
        />
      </View>
      <ModalConfirm isOpen={isOpen} />
    </>
  );
}
