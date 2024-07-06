import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn('flex flex-col gap-1.5 rounded-lg ', className)}>
      {label && <Text className={cn('text-base', labelClasses)}>{label}</Text>}
      <TextInput
        placeholderTextColor="#363636"
        style={{ color: "#000"}}
        className={cn(
          inputClasses,
          'py-2 h-14 px-4 rounded-lg  bg-gray-100'
        )}
        {...props}
      />
    </View>
  )
);

export { Input };


