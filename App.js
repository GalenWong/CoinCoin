import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CoinCoin from './CoinCoin/CoinCoin';
import Doge from './CoinCoin/Doge';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CoinCoin" component={CoinCoin} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="dog" size={40} />
          )
        }}/>
        <Tab.Screen name="Doge" component={Doge} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}