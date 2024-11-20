import { useDispatch } from 'react-redux'
import { deleteAction } from '../features/actions/actionSlice'

function ActionItem({ action }) {
  const dispatch = useDispatch()
  
  return (
    
    <div className='action'>
       
      <h2>{action.text}</h2>
      <button onClick={() => dispatch(deleteAction(action._id))} className='close'>
        X
      </button>
      
    </div>
  )
}

export default ActionItem
