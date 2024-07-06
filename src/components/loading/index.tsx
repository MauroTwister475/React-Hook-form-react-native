import  { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export function Loading() {
  const animation = useRef<LottieView>(null);

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 210,
          height: 210,
          backgroundColor: '#fff',
        }}
        source={require('../../assets/loading.json')}
      />
    </View>
  );
}