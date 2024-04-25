import React from 'react'
import { Button, ButtonText } from '@gluestack-ui/themed'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

const MakeTask = ({ navigation }) => {
  const instState = [
    {
      title: 'Code',
      isCompleted: true
    },
    {
      title: 'Meeting with team at 9',
      isCompleted: false
    },
    {
      title: 'Check Emails',
      isCompleted: false
    },
    {
      title: 'Write an article',
      isCompleted: false
    }
  ]
  const [taskTitle, setTaskTitle] = React.useState('')
  const [taskTime, setTaskTime] = React.useState('Today')
  const [taskPriority, setTaskPriority] = React.useState(0)
  const [taskList, setTaskList] = React.useState([instState])

  const saveNewTask = (taskTitle) => {
    setTaskList((prevlist) => {
      return [
        ...prevlist,
        {
          taskTiile: taskTitle,
          taskDate: taskTime,
          isCompleted: false
        }
      ]
    })
    console.log(taskList)
    navigation.goBack()
  }
  const handleDelete = (index) => {
    setTaskList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index)
      return temp
    })
  }

  return (
    <View style={styles.container}>
      <Text>Task</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTaskTitle}
        value={taskTitle}
      />
      {/* TODO: choosing date via calender styled input */}
      <TextInput
        style={styles.input}
        onChangeText={setTaskTime}
        value={taskTime}
      />
      {/* TODO: add choosing tags, priority, project and planned time */}
      <FontAwesome.Button
        name="check"
        backgroundColor="#3b5998"
        borderRadius={36}
        onPress={saveNewTask}
      >
        Confirm
      </FontAwesome.Button>
    </View>
  )
}

export default MakeTask
