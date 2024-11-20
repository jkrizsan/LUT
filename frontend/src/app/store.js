import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import actionReducer from '../features/actions/actionSlice'
import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    actions: actionReducer,
    goals: goalReducer,
  },
})
