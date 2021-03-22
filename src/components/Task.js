import React from 'react'

const Task = ({ task }) => {
  return (
    <div>
      <div>
        <h2 className='task-header'>{task.title}</h2>
      </div>

      <hr />
      <p className='task-body'>{task.description}</p>
    </div>
  )
}

export default Task
