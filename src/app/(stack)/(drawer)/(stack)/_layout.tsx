import { Stack } from "expo-router";

export default function NewGameLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="new-game" />
    </Stack>
  );
}
