import React, {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const LoadingComponent = () => {
  const spinValue = useMemo(() => new Animated.Value(0), []);

  // Initiate the spin animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true, // Use the native driver to boost performance
      }),
    ).start();
  }, [spinValue]);

  // Map our spin value to a 360 degree rotation
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <FontAwesomeIcon icon={faSpinner} size={30} />
    </Animated.View>
  );
};

export default LoadingComponent;
