import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAction } from '../features/actions/actionSlice'
import { useParams } from 'react-router-dom'

function ActionForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  
  let { Id} = useParams();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createAction({goalId:  Id, text}))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Add Action Text:</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
         
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Action
          </button>
        </div>
      </form>
    </section>
  )
}

export default ActionForm
