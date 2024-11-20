import { useDispatch } from 'react-redux'
import { deleteAction } from '../features/actions/actionSlice'
import { Link } from 'react-router-dom'

function ActionItem({ action }) {
  const dispatch = useDispatch()
  
  return (
    
    <div className='action'>
       
      <div>Created: {new Date(action.createdAt).toLocaleString('en-US')}</div>
      <h2>{action.text}</h2>
      <button onClick={() => dispatch(deleteAction(action._id))} className='close'>
        X
      </button>
      <nav>
        <ul>
              <Link to={`action/${action._id}`}>Actions</Link>
        </ul>
      </nav>
    </div>
  )
}

export default ActionItem
