import React from 'react'
import { Row, Col } from 'react-bootstrap'
import TaskList from './TaskList'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const TaskPage = ({ tasks }) => {
  const renderTaskList = () => {
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => task.status === status)
      return (
        <Col md={3}>
          <TaskList key={status} status={status} tasks={statusTasks} />
        </Col>
      )
    })
  }
  return (
    <Row classNam='tasks'>
      <div classNam='task-lists'>{renderTaskList()}</div>
    </Row>
  )
}

export default TaskPage
