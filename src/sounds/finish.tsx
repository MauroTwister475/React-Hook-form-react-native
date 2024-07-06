import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export function FinishGame() {
  const [sound, setSound] = useState<any>();

  useEffect(() => {
    (async function playSound() {
      setTimeout(async () => {
        const { sound } = await Audio.Sound.createAsync(
          require("@/sounds/final.wav")
        );
        setSound(sound);

        await sound.playAsync();
      }, 3000);
    })();

    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  return <></>;
}
