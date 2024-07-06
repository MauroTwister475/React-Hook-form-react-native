import { ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Pressable, Text, PressableProps, View } from "react-native";
import { useDisabledStore } from "@/stores/isDisabledOption";
import { colors } from "@/styles/colors";
import clsx from "clsx";

interface QuestionItemProps extends PressableProps {
  question: string;
  letter: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function QuestionItem({
  letter,
  question,
  onPress,
  style,
  ...props
}: QuestionItemProps) {
  const { isDisabled } = useDisabledStore();

  const backgroundColor = useSharedValue<string>("#E5E7EB");
  const opacity = useSharedValue<number>(1);

  const handlePress = () => {
    backgroundColor.value = withSequence(
      withTiming("#C1C2C4", { duration: 300 }),
      withTiming("#C1C2C4", { duration: 300 }),
      withTiming("#C1C2C4", { duration: 0 }),
      withTiming("#C1C2C4", { duration: 0 }),
      withTiming("#E5E7EB", { duration: 300 })
    );

    opacity.value = withSequence(
      withTiming(0, { duration: 300 }),
      withTiming(1, { duration: 300 }),
      withTiming(0, { duration: 300 }),
      withTiming(1, { duration: 300 })
    );

    if (onPress) {
      onPress();
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <Pressable
      onPress={handlePress}
      style={{
        width: "100%",
        height: 62,
        borderRadius: 18,
      }}
      {...props}
      disabled={isDisabled}
    >
      <Animated.View
        style={[style, animatedStyle]}
        className="h-full text-wrap py-2 items-center flex-row px-4 pr-4 rounded-lg bg-gray-200 gap-2"
      >
        <View className="w-10 h-10 rounded-lg items-center justify-center bg-violet-800">
          <Text className="text-lg font-semibold text-white">{letter}</Text>
        </View>
        <View className="flex-1 py-2 h-max">
          <Text className="font-semibold text-slate-900">{question}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}