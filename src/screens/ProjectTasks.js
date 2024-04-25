import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TaskItem from '../components/TaskItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AddIcon, Fab, FabIcon } from '@gluestack-ui/themed'
import { FontAwesome } from '@expo/vector-icons'

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

const ProjectTasks = ({ navigation }) => {
  const projectTasksCount = 3
  const projectName = 'Math'
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>{projectName}</Text>
      <TaskItem
        isCompleted={false}
        taskText={'Do your homework'}
        taskDate={'5'}
      />
      <TaskItem
        isCompleted={false}
        taskText={'Prepare for the exams'}
        taskDate={'6'}
      />
      <TaskItem
        isCompleted={false}
        taskText={'Do extra exercises'}
        taskDate={'6'}
      />
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

export default ProjectTasks
