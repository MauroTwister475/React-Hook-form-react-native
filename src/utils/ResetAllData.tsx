import { usePoints } from "@/stores/usePoints";
import { useStateGame } from "../stores/useLostGame";
import { useWinGame } from "../stores/useWinGame";
import { useDisabledStore } from "@/stores/isDisabledOption";
import { useSelectedIndex } from "@/stores/useSelectedIndex";

export function useResetAllData() {
  const { onSetLostGame } = useStateGame();
  const { onSetWinGame } = useWinGame();
  const { onSetIsDisabled } = useDisabledStore();
  const { onSetSelectedIndex } = useSelectedIndex();
  const { onSetPoints } = usePoints();

  function resetAllModalData() {
    onSetWinGame(false);
    onSetLostGame(false);
    onSetPoints(0);
    onSetIsDisabled(false);
    onSetSelectedIndex(0);
  }

  return resetAllModalData;
}
