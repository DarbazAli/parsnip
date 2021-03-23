import React from 'react'
import { Form } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const Task = ({ task, onEditTask }) => {
  return (
    <div
      style={{
        border: '1px solid #c7c7c7',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      <div>
        <h3 className='task-header' style={{ display: 'inline' }}>
          {task.title}
        </h3>

        <FormControl
          as='select'
          value={task.status}
          onChange={(e) => onEditTask(task.id, e.target.value)}
        >
          {TASK_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </FormControl>
      </div>
      <hr />
      <p className='task-body'>{task.description}</p>
    </div>
  )
}

export default Task
