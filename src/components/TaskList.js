import React from 'react'

import Task from './Task'

const TaskList = ({ tasks, status, onEditTask }) => {
  return (
    <div>
      <div className='my-3'>
        <strong>{status}</strong>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEditTask={onEditTask} />
      ))}
    </div>
  )
}

export default TaskList
