import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Poppins_500Medium, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { Loading } from "@/components/loading";
import { ToastProvider } from "@/components/ui/Toast";
import { colors } from "@/styles/colors";
import "../../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView>
      <ToastProvider position="top">
        <Slot />
        <StatusBar style="light" backgroundColor={colors.violet[800]} />
      </ToastProvider>
    </GestureHandlerRootView>
  );
}
