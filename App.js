import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ItemViewCard from './src/components/ItemViewCard';
import ItemViewCollection from './src/components/ItemViewCollection';

export default function App() {
  return (
      <View style={styles.container}>
        <ItemViewCollection />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
