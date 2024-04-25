import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TaskItem from '../components/TaskItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AddIcon, Fab, FabIcon, VStack } from '@gluestack-ui/themed'
import { FontAwesome } from '@expo/vector-icons'

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
  const showIcon = 'true'
  // const showLabel = 'true'
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>{date}</Text>
      {/* TODO: take tasks from DB */}
      <VStack space={'md'}>
        <TaskItem isCompleted={true} taskText={'Clean the room'} />
        <TaskItem isCompleted={false} taskText={'Do your homework'} />
        <TaskItem isCompleted={false} taskText={'Take Foxy for a walk'} />
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
