import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskPage from './components/TaskPage'
import Container from 'react-bootstrap/Container'

import { createTask, editTask } from './actions'

const App = () => {
  const tasks = useSelector((state) => state.tasks.tasks)

  const dispatch = useDispatch()

  const taskCreateHandler = (title, description) => {
    dispatch(createTask(title, description))
  }

  const taskEditHandler = (id, status) => {
    dispatch(editTask(id, { status }))
  }

  return (
    <Container className='my-5'>
      <h1>Welcome to Parsnip</h1>
      <TaskPage
        tasks={tasks}
        onCreateTask={taskCreateHandler}
        onEditTask={taskEditHandler}
      />
    </Container>
  )
}

export default App
