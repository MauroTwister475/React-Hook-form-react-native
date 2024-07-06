import  { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export function GamerOverAnimation() {
  const animation = useRef<LottieView>(null);

  return (
    <View className='w-full h-auto items-center justify-center '>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 215,
          height: 215,
          backgroundColor: '#fff',
        }}
        source={require('@/assets/gameOver.json')}
      />
    </View>
  );
}