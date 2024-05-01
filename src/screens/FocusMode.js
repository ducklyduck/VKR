import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import TaskItem from '../components/TaskItem'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { VStack } from '@gluestack-ui/themed'
import { useTaskListStore } from '../utils/store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
    // justifyContent: 'center'
  },
  timer: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tasksWrapper: {
    marginVertical: 30
  }
})

const FocusMode = ({ navigation }) => {
  const timer = '57:00'
  const list = useTaskListStore((state) => state.taskList)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.timer}>{timer}</Text>
      <Text style={{ fontWeight: '600', fontSize: 28 }}>Your tasks</Text>
      <VStack style={styles.tasksWrapper} space={'md'}>
        {list
          .filter((task) => task.taskDate === 'Today')
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
      <FontAwesome.Button
        name="pause"
        backgroundColor="indianred"
        size={36}
        borderRadius={40}
        style={{ marginHorizontal: 7, marginLeft: 15 }}
        onPress={() => {
          console.log('concentration stopped')
          navigation.goBack()
        }}
      ></FontAwesome.Button>
    </SafeAreaView>
  )
}

export default FocusMode
