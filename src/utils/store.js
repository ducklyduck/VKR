// import { configureStore } from '@reduxjs/toolkit';
// import taskListReducer from './taskListSlice'

// export const store = configureStore({
//   reducer: {
//     taskList: taskListReducer,
//   },
// });

import { create } from 'zustand'

export const useTaskListStore = create((set) => ({
  taskList: [
    {
      taskTitle: 'Code',
      isCompleted: true,
      taskDate: 'Today',
      taskProject: '',
      TaskPriority: 0,
      taskTags: []
    },
    {
      taskTitle: 'Take Foxy for',
      isCompleted: true,
      taskDate: 'Today',
      taskProject: 'Daily',
      TaskPriority: 0,
      taskTags: []
    }
  ],
  addTask: () =>
    set((state) => ({
      taskList:
        state.taskList +
        {
          taskTitle: 'Code',
          isCompleted: true,
          taskDate: 'Today',
          taskProject: '',
          TaskPriority: 0,
          taskTags: []
        }
    })),
  changeCompletion: () => set((state) => ({ taskList: state })),
  removeTask: () => set((state) => ({ taskList: [] }))
}))
