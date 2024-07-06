import { Text, View } from "react-native";

export function QuestionTitle({ title }: { title: string }) {
  return (
    <View className="w-full justify-center">
      <Text className="text-xl text-slate-900 font-semibold">{title}</Text>
    </View>
  );
}
