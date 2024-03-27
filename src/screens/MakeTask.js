import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const MakeTask = () => {
  return (
    <View>
      <Text>Task</Text>
      <TextInput>What todo?</TextInput>
      <TextInput>When todo?</TextInput>
    </View>
  );
};

export default MakeTask
