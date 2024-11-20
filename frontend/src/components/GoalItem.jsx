import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { Link } from 'react-router-dom'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>  
      <div>Created: {new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <div>Deadline: {new Date(goal.deadline).toLocaleString('en-US')}</div>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
      <nav>
        <ul>
              <Link to={`action/${goal._id}`}>Actions</Link>
        </ul>
      </nav>
    </div>
  )
}

export default GoalItem
