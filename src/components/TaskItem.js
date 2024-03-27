import React from "react";
import moment from "moment";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  task: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 2,
    backgroundColor: "indianred",
  },
  date: {
    color: "#E5DFED",
    fontSize: 15,
  },
});

const TaskItem = ({ status }) => {
  console.log(status);
  return (
    <View style={styles.task}>
      <FontAwesome
        name={status == "inProgress" ? "circle-o" : "check-circle-o"}
        size={20}
        borderRadius={0}
        backgroundColor={"indianred"}
        color="black"
      ></FontAwesome>
      <Text>Make food</Text>
      <Text style={styles.date}>{moment().format("dddd h:mm:ss a")}</Text>
    </View>
  );
};

export default TaskItem;
