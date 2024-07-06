import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export function LostGame() {
  const [sound, setSound] = useState<any>();

  useEffect(() => {
    (async function playSound() {
      setTimeout(async () => {
        const { sound } = await Audio.Sound.createAsync(
          require("@/sounds/lose.wav")
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
