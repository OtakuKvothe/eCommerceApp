import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import ItemViewCollection from './src/components/ItemViewCollection';
import ItemDetailView from './src/components/ItemDetailView';
import HomeTab from './src/tabs/HomeTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? 'ios-home' : 'ios-home-outline';
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
        >
          <Tab.Screen name='Home' options={{ headerShown: false }} component={HomeTab} />
        </Tab.Navigator>
      </NavigationContainer>
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
