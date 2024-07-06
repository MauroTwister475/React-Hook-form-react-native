import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Questions } from "@/screens/questions";
import { useSelectedCategory } from "@/stores/useSelectedCategory";
import { useResetAllData } from "@/utils/ResetAllData";
import { TopSheetUI } from "@/components/top-sheet";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { Loading } from "@/components/loading";

export default function NewGame() {
  const [loading, setisLoading] = useState(true);
  const { selectedCategory } = useSelectedCategory();
  const resetAllData = useResetAllData();

  useEffect(() => {
    resetAllData();
  }, []);

  setTimeout(() => setisLoading(false), 3500);

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="w-full flex-1 items-center justify-center bg-violet-800">
      <TopSheetUI flex={1} className="items-center justify-center">
        <View className="w-full flex-row items-center justify-center gap-2">
          <Image source={selectedCategory.icon} className="w-12 h-12" />
          <Text className="text-white text-2xl font-bold">
            {selectedCategory.name}
          </Text>
        </View>
      </TopSheetUI>
      <BottomSheetUI flex={4}>
        <Questions />
      </BottomSheetUI>
    </View>
  );
}