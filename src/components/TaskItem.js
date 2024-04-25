import React from 'react'
import moment from 'moment'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

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
  text: {
    fontSize: 18,
    color: '#E5DFED',
    marginRight: 'auto'
  },
  date: {
    color: '#E5DFED',
    fontSize: 15,
    marginRight: 5
  }
})

const TaskItem = ({ isCompleted, taskText, taskDate }) => {
  return (
    <View style={styles.task}>
      <FontAwesome
        name={isCompleted ? 'check-circle-o' : 'circle-o'}
        style={styles.statusIcon}
        size={30}
        borderRadius={0}
        backgroundColor={'indianred'}
        color="black"
      ></FontAwesome>
      <Text style={styles.text}>{taskText}</Text>
      <Text style={styles.date}>
        {taskDate ? moment(taskDate).format('dddd') : ''}
      </Text>
    </View>
  )
}

export default TaskItem
