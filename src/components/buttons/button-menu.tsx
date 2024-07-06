import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Menu } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

export function ButtonMenu() {
  const navigation = useNavigation();

  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <View className="w-10 h-10 absolute top-10 right-0">
      <TouchableOpacity
        activeOpacity={0.5}
      >
        <Menu onPress={toggleMenu} size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
