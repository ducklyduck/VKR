import React from "react";
// All the Screens
import ProjectTasks from "../screens/ProjectTasks";
import TodayTasks from "../screens/TodayTasks";
// Components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import FocusMode from "../screens/FocusMode";
import MakeTask from "../screens/MakeTask";

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "crimson",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "white",
        },
        headerStyle: {
          backgroundColor: "ghostwhite",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "crimson",
        },
      }}
    >
      <Tab.Screen
        name={"Today"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"calendar"}
              size={25}
              color={focused ? "crimson" : "black"}
            />
          ),
        }}
      >
        {() => <TodayTasks />}
      </Tab.Screen>

      <Tab.Screen
        name={"Project"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"bookmark"}
              size={25}
              color={focused ? "crimson" : "black"}
            />
          ),
        }}
      >
        {() => <ProjectTasks />}
      </Tab.Screen>
      <Tab.Screen
        name={"Task"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"pen-tool"}
              size={25}
              color={focused ? "crimson" : "black"}
            />
          ),
        }}
      >
        {() => <MakeTask />}
      </Tab.Screen>
      <Tab.Screen
        name={"Focus"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"activity"}
              size={25}
              color={focused ? "crimson" : "black"}
            />
          ),
        }}
      >
        {() => <FocusMode />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
