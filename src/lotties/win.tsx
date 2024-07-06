import  { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export function WinAnimation() {
  const animation = useRef<LottieView>(null);

  return (
    <View className='w-full h-auto items-center justify-center '>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 210,
          height: 210,
          backgroundColor: '#fff',
        }}
        source={require('@/assets/win.json')}
      />
    </View>
  );
}