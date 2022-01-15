import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ItemViewCollection from './src/components/ItemViewCollection';
import ItemDetailView from './src/components/ItemDetailView';

export default function App() {
  return (
      <View style={styles.container}>
        <ItemDetailView />
      </View>
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
