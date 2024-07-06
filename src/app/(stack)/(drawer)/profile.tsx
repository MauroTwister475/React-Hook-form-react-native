import { View, Text, Image } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { TopSheetUI } from "@/components/top-sheet";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { ButtonMenu } from "@/components/buttons/button-menu";

export default function Profile() {
  return (
    <View className="w-full flex-1 items-center bg-violet-800">
      <TopSheetUI flex={3}>
        <ButtonMenu />
        <Avatar className="w-32 h-32">
          <Image
            source={require("@/assets/avatar.jpg")}
            className="rounded-full w-full h-full"
          />
          <AvatarFallback style={{backgroundColor: "#EFEFEF"}}>
            <Text className="font-bold text-4xl text-slate-900">M</Text>
          </AvatarFallback>
        </Avatar>
        <View className="w-full items-center justify-center gap-1 flex-col py-3">
          <Text className="text-white font-bold text-xl">
            Mauro Dinis Raimundo
          </Text>
          <Text className="text-white font-semibold">@maurotwister475</Text>
        </View>
      </TopSheetUI>
    </View>
  );
}
