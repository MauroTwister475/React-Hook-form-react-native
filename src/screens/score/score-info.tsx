import {  Text } from "react-native";
import { GamerOverAnimation } from "@/lotties/game-over";

interface ScoreInfoProps {
  message: string;
}

export function ScoreInfo({ message }: ScoreInfoProps) {

  return (
    <>
      <GamerOverAnimation />
      <Text className="text-2xl text-slate-900 text-center">{message}</Text>
    </>
  );
}
