import { create } from 'zustand'

export const useTaskListStore = create((set) => ({
  taskList: [
    {
      taskTitle: 'Code',
      isCompleted: false,
      taskDate: 'Today',
      taskProject: '',
      taskPriority: 3,
      taskTags: []
    },
    {
      taskTitle: 'Test preparations',
      isCompleted: false,
      taskDate: 'Today',
      taskProject: 'Math',
      taskPriority: 2,
      taskTags: []
    },
    {
      taskTitle: 'Take Foxy for',
      isCompleted: true,
      taskDate: 'Today',
      taskProject: 'Daily',
      taskPriority: 1,
      taskTags: []
    },
    {
      taskTitle: 'Prepare for exams',
      isCompleted: false,
      taskDate: 'Tomorrow',
      taskProject: 'Daily',
      taskPriority: 3,
      taskTags: []
    },
    {
      taskTitle: 'Exercise 14.A',
      isCompleted: false,
      taskDate: 'Saturday',
      taskProject: 'Physics',
      taskPriority: 2,
      taskTags: ['homework', 'studies']
    },
    {
      taskTitle: 'Exercise 24.C',
      isCompleted: false,
      taskDate: 'Saturday',
      taskProject: 'Math',
      taskPriority: 2,
      taskTags: ['homework', 'studies']
    },
    {
      taskTitle: 'Exercise 15.A and 15.B',
      isCompleted: false,
      taskDate: 'Saturday',
      taskProject: 'Physics',
      taskPriority: 2,
      taskTags: ['homework', 'studies']
    },
    {
      taskTitle: 'Test',
      isCompleted: false,
      taskDate: 'Monday',
      taskProject: 'Math',
      taskPriority: 3,
      taskTags: ['studies']
    }
  ],
  projectList: ['Daily', 'Math', 'Physics'],
  addTask: () =>
    set((state) => ({
      taskList:
        state.taskList +
        {
          taskTitle: 'Code',
          isCompleted: true,
          taskDate: 'Today',
          taskProject: '',
          taskPriority: 0,
          taskTags: []
        }
    })),
  changeCompletion: () => set((state) => ({ taskList: state })),
  removeTask: () => set((state) => ({ taskList: [] }))
}))
