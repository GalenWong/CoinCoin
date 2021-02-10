import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import Doge from './Doge';

const dogeCoinApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_24hr_change=true';

async function getPriceAndChange() {
}

export default function CoinCoin() {
  const [numPress, setNumPress] = useState(0);
  const [price, setPrice] = useState(0);
  const [change, setChange] = useState(0);


  /* fetching data when component loaded for the first time */

  /* fetching data when button is clicked 5 times */

  /* notifying user when price is updated */

  /* calling API every 10 seconds */

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Doge numPress={numPress} />
      <Text style={styles.price}>{price}({change.toFixed(2)}%)</Text>
      <Text>Presses: {numPress}</Text>
      <Button title="STONKS!" onPress={() => { setNumPress(numPress + 1); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 30
  }
});
