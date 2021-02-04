import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
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


  const getNewPrice = async () => {
    const p = await getPriceAndChange();
    setPrice(p.price);
    setChange(p.change);
  };

  // reacting to things to reduce calls
  useEffect(() => {
    if(numPress >= 5) {
      console.log('you just cannot wait, can\'t you...');
      getNewPrice();
      setNumPress(0);
    }
  },[numPress]);

  // on mount
  useEffect(() => {
    console.log('asking for the price for the first time...');
    getNewPrice();
  }, []);

  // setting off timer and clean up
  // useEffect(() => {
  //   console.log('register timer');
  //   const timerId = setInterval(() => {
  //     console.log('timer hits! fetching price of doge coin for you...')
  //     getPriceAndChange();
  //   }, 1000 * 10);
  //   return () => {
  //     console.log('clean up timer');
  //     clearInterval(timerId);
  //   };
  // }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('register timer on focus');
      const timerId = setInterval(() => {
        console.log('timer hits! fetching price of doge coin for you...')
        getPriceAndChange();
      }, 1000 * 10);
      return () => {
        console.log('clean up timer');
        clearInterval(timerId);
      };
    }, [])
  ); 

  // reacting to change
  useEffect(() => {
    console.log('URGENT: price changed');
  }, [price]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Doge numPress={numPress} />
      <Text style={styles.price}>{price}({change.toFixed(2)}%)</Text>
      <Text>Presses: {numPress}</Text>
      <Button title="STONKS!" onPress={() => { setNumPress(numPress + 1); }}/>
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
