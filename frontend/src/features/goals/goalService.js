import axios from 'axios'

const GOAL_API_URL = '/api/goals/'

const ACTION_API_URL = '/api/actions/'

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(GOAL_API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(GOAL_API_URL, config)

  return response.data
}

// Delete user goal and related data (goals actions)
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  //Delete the  golas Actions first
  const responseDeleteActions = await axios.delete(ACTION_API_URL + "goal/" + goalId, config)

  if(responseDeleteActions.status != 200)
  {
    return responseDeleteActions.data
  }

  const response = await axios.delete(GOAL_API_URL + goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
