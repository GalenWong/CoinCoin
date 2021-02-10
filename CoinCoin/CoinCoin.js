import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import Doge from './Doge';

const dogeCoinApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_24hr_change=true';

async function getPriceAndChange() {
  const resp = await fetch(dogeCoinApiUrl);
  const body = await resp.json();
  return {
    price: body.dogecoin.usd,
    change: body.dogecoin.usd_24h_change,
  };
}

export default function CoinCoin() {
  const [numPress, setNumPress] = useState(0);
  const [price, setPrice] = useState(0);
  const [change, setChange] = useState(0);


  /* fetching data when component loaded for the first time */
  const getAndSetData = async () => {
    console.log('loading the price...');
    const data = await getPriceAndChange();
    setPrice(data.price);
    setChange(data.change);
  };
  useEffect(() => {
    getAndSetData();
  }, []);

  /* fetching data when button is clicked 5 times */
  useEffect(() => {
    if (numPress >= 5) {
      getAndSetData();
      setNumPress(0);
    }
  }, [numPress]);

  /* notifying user when price is updated */
  useEffect(() => {
    Toast.show({ text1: 'Doge', text2: 'Price Changed' });
  }, [price]);


  /* calling API every 10 seconds */
  useEffect(() => {
    setInterval(() => {
      getAndSetData();
    }, 1000 * 5);
  }, []);

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
