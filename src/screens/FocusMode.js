import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import TaskItem from '../components/TaskItem'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'

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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.timer}>{timer}</Text>
      <Text style={{ fontWeight: '600', fontSize: 28 }}>Your tasks</Text>
      <View style={styles.tasksWrapper}>
        <TaskItem isCompleted={false} taskText={'Math homework'} />
        <TaskItem isCompleted={false} taskText={'Physics homework'} />
      </View>
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
