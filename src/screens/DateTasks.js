import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TaskItem from '../components/TaskItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AddIcon, Fab, FabIcon, VStack } from '@gluestack-ui/themed'
import { FontAwesome } from '@expo/vector-icons'
import { useTaskListStore } from '../utils/store'

// TODO: import styles from a special style file
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screenTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'crimson',
    paddingLeft: 20
  }
})

const DateTasks = ({ navigation }) => {
  const date = 'Today'
  const list = useTaskListStore((state) => state.taskList)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.screenTitle}>{date}</Text>
      </TouchableOpacity>

      <VStack space={'md'}>
        {list
          .filter((task) => task.taskDate === date)
          .map((task, taskI) => (
            <TaskItem
              taskTitle={task.taskTitle}
              isCompleted={task.isCompleted}
              taskDate={task.taskDate}
              taskProject={task.taskProject}
              taskPriority={task.taskPriority}
              taskTags={task.taskTags}
            />
          ))}
      </VStack>

      <Fab
        placement={'bottom right'}
        size={'md'}
        backgroundColor="tomato"
        onPress={() => navigation.navigate('FabScreens', { screen: 'Task' })}
      >
        <FontAwesome
          name="plus"
          width={20}
          size={24}
          color="white"
          backgroundColor="tomato"
        />
      </Fab>
      <Fab
        placement={'bottom left'}
        size={'md'}
        backgroundColor="tomato"
        onPress={() => navigation.navigate('FabScreens', { screen: 'Focus' })}
      >
        <FontAwesome
          name="lightbulb-o"
          width={20}
          size={24}
          color="white"
          backgroundColor="tomato"
        />
      </Fab>
    </SafeAreaView>
  )
}

export default DateTasks
