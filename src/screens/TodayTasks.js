import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskItem from "../components/TaskItem";

const TodayTasks = () => {
  // const taskCount = 3;
  return (
    <View>
      <TaskItem status={'done'}/>
      <TaskItem status={'inProgress'}/>
      <TaskItem status={'inProgress'}/>
    </View>
  );
};

export default TodayTasks;
