import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Loading from './app/screen/Loading';

export default function App() {
  return (
    <View style={styles.container}>
     <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBD00",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
