import React from "react";
import { View, Text } from "react-native";
import TaskItem from "../components/TaskItem";

const ProjectTasks = () => {
  const projectTasksCount = 3;
  const projectName = "Math";
  return (
    <View>
      <Text>
        You have {projectTasksCount} tasks in {projectName} category
      </Text>
      <TaskItem status={'done'}/>
      <TaskItem status={'inProgress'}/>
      <TaskItem status={'inProgress'}/>
    </View>
  );
};

export default ProjectTasks;
