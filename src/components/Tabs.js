import React from 'react'
// All the Screens
import ProjectTasks from '../screens/ProjectTasks'
import DateTasks from '../screens/DateTasks'
import FocusMode from '../screens/FocusMode'
import MakeTask from '../screens/MakeTask'
// Components
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
// import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

const TaskFilterScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={'Date'}
        component={DateTasks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'calendar'}
              size={25}
              color={focused ? 'crimson' : 'black'}
            />
          )
        }}
      />
      <Drawer.Screen
        name={'Project'}
        component={ProjectTasks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'bookmark'}
              size={25}
              color={focused ? 'crimson' : 'black'}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

const FabScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Task'}
        component={MakeTask}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={'Focus'}
        component={FocusMode}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TaskScreens"
          component={TaskFilterScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FabScreens"
          component={FabScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Tabs
