import React from 'react'
import { Col } from 'react-bootstrap'
import Task from './Task'

const TaskList = ({ tasks, status }) => {
  return (
    <div>
      <div className='task-list-title'>
        <strong>{status}</strong>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
