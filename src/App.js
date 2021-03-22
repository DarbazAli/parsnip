import React from 'react'
import TaskPage from './components/TaskPage'

const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The Store, Actions, and Reucers, oh my!',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peac on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
]

const App = () => {
  return (
    <div>
      <h1>Welcome to Parsnip</h1>
      <TaskPage tasks={mockTasks} />
    </div>
  )
}

export default App
