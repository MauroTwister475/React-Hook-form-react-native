import { useRouter } from "expo-router";
import { View } from "react-native";
import { Title } from "@/components/title";
import { ButtonPrimary } from "@/components/buttons/button-primary";
import { useModalStore } from "@/stores/useModalStore";
import { usePoints } from "@/stores/usePoints";
import { useResetAllData } from "@/utils/ResetAllData";
import Modal from "react-native-modal";

interface ModalConfirmProps {
  isOpen: boolean;
}

export function ModalConfirm({ isOpen }: ModalConfirmProps) {
  const router = useRouter();

  const { onSetIsOpen } = useModalStore();
  const { onSetPoints } = usePoints();
  const resetAllData = useResetAllData();

  function finishGame() {
    onSetPoints(0);
    resetAllData();
    router.back();
    onSetIsOpen(false);
  }

  return (
    <View className="flex-1 w-full h-full">
      <Modal isVisible={isOpen}>
        <View className="flex-col gap-8 bg-white shadow-lg w-full rounded-lg py-5 px-8">
          <Title size="md" title="Deseja realmente terminar o jogo actual?" theme="dark" />
          <View className="w-full items-center justify-center flex-row gap-4">
            <ButtonPrimary size="md" title="Sim" onPress={finishGame} />
            <ButtonPrimary size="md" title="Não" onPress={() => onSetIsOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
