import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ActionForm from '../components/ActionForm'
import ActionItem from '../components/ActionItem'
import Spinner from '../components/Spinner'
import { getGoalText,getActions, reset } from '../features/actions/actionSlice'

function Action() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  let { Id} = useParams();
  
  const { user } = useSelector((state) => state.auth)
  const { goalText, actions, isLoading, isError, message } = useSelector(
    (state) => state.actions
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoalText(Id))
    dispatch(getActions(Id))
    
    return () => {
      dispatch(reset())
    }
  }, [user, Id, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        <p>Actions to achieve the below goal:</p>
        <h3>Goal: {goalText}</h3>
      </section>
      
      <ActionForm key={Id}/>

      <section className='content'>
        {actions.length > 0 ? (
          <div className='actions'>
            {actions.map((action) => (
              <ActionItem key={action._id} action={action} />
            ))}
          </div>
        ) : (
          <h3>You have not set any actions</h3>
        )}
      </section>
    </>
  )
}

export default Action
