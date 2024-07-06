import { forwardRef, ElementType } from "react";
import { TextInput, Text, View } from "react-native";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  Icon?: ElementType;
  className?: string;
  inputClasses?: string;
  errors?: string;
}

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, inputClasses, errors, Icon, ...props }, ref) => (
    <View className={cn(" ", className)}>
      <View className="bg-zinc-800 flex flex-row items-center rounded-lg px-4">
        {Icon && <Icon size={20} color={"#8C8D8E"} />}
        <TextInput
          placeholderTextColor="#8C8D8E"
          style={{ color: "#cecece" }}
          className={cn(inputClasses, "py-2 h-14 px-2.5")}
          {...props}
        />
      </View>
      <Text className="text-red-500 text-sm inline-block">{errors}</Text>
    </View>
  )
);

export { Input };
