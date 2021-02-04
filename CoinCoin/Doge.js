import React from 'react';
import { Image, StyleSheet } from 'react-native';
import doge from './Doge.jpg';


function Doge({ numPress }) {
  const style = 5 >= numPress && numPress >= 0 ? [styles.dogeDefault, styles[`doge${numPress}`]] : styles.dogeDefault;
  return <Image source={doge} style={style} />;
}

export default Doge;

const styles = StyleSheet.create({
  dogeDefault: {
    width: 50,
    resizeMode: 'contain'
  },
  doge0: {
    width: 60
  },
  doge1: {
    width: 80,
    transform: [{ rotate: '5deg' }]
  },
  doge2: {
    width: 100,
    transform: [{ rotate: '-5deg' }]
  },
  doge3: {
    width: 120,
    transform: [{ rotate: '10deg' }]
  },
  doge4: {
    width: 140,
    transform: [{ rotate: '-10deg' }]
  },
  doge5: {
    width: 160,
    transform: [{ rotate: '20deg' }]
  },
});
