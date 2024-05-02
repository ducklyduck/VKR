import React from 'react'
import moment from 'moment'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { HStack, VStack, Checkbox, Center } from '@gluestack-ui/themed'
// import { useTaskListStore } from '../utils/store'

const styles = StyleSheet.create({
  task: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    borderWidth: 2,
    backgroundColor: 'indianred'
  },
  statusIcon: {
    marginLeft: 10,
    marginRight: 20
  },
  taskTitle: {
    fontSize: 22,
    color: '#123FED',
    fontWeight: 'bold'
    // marginRight: 'auto'
  },
  taskDate: {
    color: '#123FED',
    fontSize: 15,
    marginRight: 5
  }
})

const TaskItem = ({
  taskTitle,
  isCompleted,
  taskDate,
  taskProject,
  taskPriority,
  taskTags
}) => {
  // TODO: make checkbox change completion's state
  // const changeCompletion = useTaskListStore((state) =>
  //   state.changeCompletion(taskTitle)
  // )
  //TODO: checkbox color changin depending on priority

  let checkboxColor = 'black'
  switch (taskPriority) {
    case 3:
      checkboxColor = 'red'
      break
    case 2:
      checkboxColor = 'orange'
      break
    case 1:
      checkboxColor = 'yellow'
      break
  }

  return (
    <Center paddingHorizontal={20} marginBottom={10}>
      <VStack maxW="300" w="100%" backgroundColor="white" padding={5}>
        <HStack justifyContent="space-between">
          <Text>{taskProject}</Text>
          <Text>{taskDate}</Text>
        </HStack>
        <HStack>
          <FontAwesome
            name={isCompleted ? 'check-circle-o' : 'circle-o'}
            style={styles.statusIcon}
            size={30}
            onPress={() => console.log(taskPriority)}
            borderRadius={0}
            color={checkboxColor}
          ></FontAwesome>
          {/* <Checkbox
            borderColor={taskPriority ? 'red' : 'yellow'}
            isChecked={isCompleted}
            // onChange={() => changeCompletion()}
            onChange={() => console.log('ckeck')}
            // value={taskTitle}
          ></Checkbox> */}
          <Text style={styles.taskTitle}>{taskTitle}</Text>
        </HStack>
        {/* <HStack>
        <Text>{taskTags}</Text>
      </HStack> */}
      </VStack>
    </Center>
  )
}

export default TaskItem
