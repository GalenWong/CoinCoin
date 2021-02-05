import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import CoinCoin from './CoinCoin/CoinCoin';
import RobinPeople from './RobinPeople/RobinPeople';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="RobinPeople" component={RobinPeople} options={{
          tabBarIcon: () => (
            <FontAwesome5 name="money-bill-wave" size={20} />
          )
        }}/>
        <Tab.Screen name="CoinCoin" component={CoinCoin} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="dog" size={30} />
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}