import axios from 'axios'

const GOAL_API_URL = '/api/goals/'

const ACTION_API_URL = '/api/actions/'

// Create new action
const createAction = async (actionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(ACTION_API_URL, actionData, config)

  return response.data
}

// Get user actions
const getActions = async (goalid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
  }

  const response = await axios.get(ACTION_API_URL + "goal/" + goalid, config)

  return response.data
}

// Delete goal action
const deleteAction = async (actionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(ACTION_API_URL + actionId, config)

  return response.data
}

// Get  action by Id
const getAction = async (actionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(ACTION_API_URL + actionId, config)

  return response.data
}

const actionService = {
  createAction,
  getActions,
  getAction,
  deleteAction,
}

export default actionService
