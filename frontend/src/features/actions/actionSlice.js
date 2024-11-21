import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import actionService from './actionService'
import goalService from './../goals/goalService'

const initialState = {
  goalText: '',
  actions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new action
export const createAction = createAsyncThunk(
  'actions/create',
  async (actionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await actionService.createAction(actionData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get goal text
export const getGoalText = createAsyncThunk(
  'goals/goal/get',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      const resp = await goalService.getGoal(id, token)
      return resp.text
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get actions
export const getActions = createAsyncThunk(
  'actions/getAll',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await actionService.getActions(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get action by Id
export const getAction = createAsyncThunk(
  'actions/get',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await actionService.getAction(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete action
export const deleteAction = createAsyncThunk(
  'actions/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await actionService.deleteAction(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getGoalText.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getGoalText.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.goalText = action.payload
    })
    .addCase(getGoalText.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.goalText = action.payload
    })
      .addCase(createAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createAction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.actions.push(action.payload)
      })
      .addCase(createAction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.actions = action.payload
      })
      .addCase(getAction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getActions.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getActions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.actions = action.payload
      })
      .addCase(getActions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteAction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.actions = state.actions.filter(
          (act) => act._id !== action.payload.id
        )
      })
      .addCase(deleteAction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = actionSlice.actions
export default actionSlice.reducer
