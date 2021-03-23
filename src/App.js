import React from 'react'
import { useSelector } from 'react-redux'
import TaskPage from './components/TaskPage'
import Container from 'react-bootstrap/Container'

const App = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  return (
    <Container className='my-5'>
      <h1>Welcome to Parsnip</h1>
      <TaskPage tasks={tasks} />
    </Container>
  )
}

export default App
