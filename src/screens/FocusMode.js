import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const FocusMode = () => {
  const timer = '57:00'
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{timer}</Text>
      <Text>Work in progress</Text>
      <Text>Your tasks</Text>
    </View>
  )
}

export default FocusMode