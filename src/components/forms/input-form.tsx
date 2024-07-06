import { useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import { Input } from "@/components/ui/Input";
import { ButtonSignUp } from "@/components/buttons/button-signup";
import { useUser } from "@/stores/useUser";
import { useResetAllData } from "@/utils/ResetAllData";
import Animated from "react-native-reanimated";

export function FormInputs() {
  const router = useRouter();
  const resetAllData = useResetAllData();
  const { onSetUser } = useUser();

  const [username, setUsername] = useState("");

  function handlerLogin() {
    if (!username) {
      Alert.alert("Aviso","Preencha todos os campos por favor.");
    } else {
      onSetUser({ username });
      resetAllData();
      router.navigate("/(drawer)");
    }
  }

  return (
    <Animated.View style={{ rowGap: 14, paddingVertical: 10 }}>
      <Input
        onChangeText={(text: string) => setUsername(text)}
        label="Nome de usuário*"
      />
      <ButtonSignUp onPress={handlerLogin} />
    </Animated.View>
  );
}
