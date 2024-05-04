import React from 'react'
import { Text, StyleSheet, TextInput, Button } from 'react-native'
import { HStack, VStack } from '@gluestack-ui/themed'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import enUS from '@ant-design/react-native/lib/locale-provider/en_US'
import * as Font from 'expo-font'
import DatePicker from 'react-native-date-picker'

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
  const [taskTitle, setTaskTitle] = React.useState('')
  const [taskDate, setTaskDate] = React.useState(new Date())
  const [taskProject, setTaskProject] = React.useState('')
  const [taskPriority, setTaskPriority] = React.useState(0)
  const [taskTags, setTaskTags] = React.useState([])

  const [open, setOpen] = React.useState(false)
  // const [taskList, setTaskList] = React.useState([instState])

  const saveNewTask = () => {
    // setTaskList((prevlist) => {
    //   return [
    //     ...prevlist,
    //     {
    //       taskTitle: taskTitle,
    //       taskDate: taskDate,
    //       isCompleted: false
    //     }
    //   ]
    // })
    console.log(taskTitle)
    navigation.goBack()
  }
  // const handleDelete = (index) => {
  //   setTaskList((prevList) => {
  //     const temp = prevList.filter((_, itemI) => itemI !== index)
  //     return temp
  //   })
  // }

  return (
    <VStack style={styles.container}>
      <Text>Task</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTaskTitle}
        value={taskTitle}
      />
      {/* TODO: choosing date via calender styled input */}
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={taskDate}
        onConfirm={(taskDate) => {
          setOpen(false)
          setTaskDate(taskDate)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      {/* TODO: tags, priorities, project pickers */}
      <HStack>
        {/* <Button size="sm" variant="link" onPress={() => console.log('pressed')}>
          <Icon as={FontAwesome} name="plus" size="xs" color="grey" />
        </Button>
        <Button size="sm" variant="link" onPress={() => console.log('pressed')}>
          <Icon as={FontAwesome} name="tasks" size="lg" color="grey" />
        </Button> */}
      </HStack>
    </VStack>
  )
}

export default MakeTask
