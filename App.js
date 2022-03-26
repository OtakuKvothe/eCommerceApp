import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import HomeTab from './src/tabs/HomeTab';
import CartTab from './src/tabs/CartTab';
import { ContextProvider } from './Context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if(route.name === 'Home'){
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if(route.name === 'Cart'){
                iconName = focused ? 'cart' : 'cart-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
        >
          <Tab.Screen name='Home' options={{ headerShown: false }} component={HomeTab} />
          <Tab.Screen name='Cart' options={{ headerShown: true }} component={CartTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
