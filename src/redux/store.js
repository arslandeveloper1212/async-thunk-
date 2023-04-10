import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slice/todo'
export const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
})