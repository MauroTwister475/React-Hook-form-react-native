import { useRouter } from "expo-router";
import { ButtonSignUp } from "@/components/buttons/button-signup";
import { Mail, Lock } from "lucide-react-native";
import { Alert, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { schema, SchemaType } from "./schema";
import Animated from "react-native-reanimated";

export function FormInputs() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  async function handlerLogin(data: SchemaType) {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            router.navigate("/(drawer)");
          }
        }, 3000);
      });
    } catch (error) {
      Alert.alert("Erro");
    }
  }

  return (
    <Animated.View className="w-full flex-col gap-4 mt-4">
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="email adress"
            autoCapitalize="none"
            Icon={Mail}
            value={value}
            onChangeText={onChange}
            errors={errors.username && errors?.username?.message}
          />
        )}
        rules={{
          required: "Email obrigatório",
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="password"
            onChangeText={onChange}
            value={value}
            Icon={Lock}
            secureTextEntry
            errors={errors.password && errors?.password?.message}
          />
        )}
        rules={{
          required: "Password obrigatória",
        }}
      />
      <ButtonSignUp
        onPress={handleSubmit(handlerLogin)}
        isSubmitting={isSubmitting}
      />
      <Text className="text-sm text-gray-400 text-center my-3">
        Don´t have an account? Register now.
      </Text>
    </Animated.View>
  );
}