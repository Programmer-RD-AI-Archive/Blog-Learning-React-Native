import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo/vector'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <Text>Description of the Blog</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
    paddingTop : "",
    borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 10,
  },
});
