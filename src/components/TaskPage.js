import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

import TaskList from './TaskList'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const TaskPage = ({ tasks }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showCardForm, setShowCardForm] = useState(false)

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setShowCardForm(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(title, description)
    resetForm()
  }

  const toggleForm = () => setShowCardForm(!showCardForm)

  const renderTaskList = () => {
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => task.status === status)
      return (
        <Col md={4} lg={4} key={status}>
          <TaskList status={status} tasks={statusTasks} />
        </Col>
      )
    })
  }
  return (
    <div>
      <Button type='button' className='mr-auto' onClick={toggleForm}>
        + New Task
      </Button>

      {showCardForm && (
        <Form
          onSubmit={handleFormSubmit}
          className='my-5'
          style={{
            border: '1px solid #c1c1c1',
            width: '500px',
            padding: '30px',
          }}
        >
          <Form.Group controlId='title' size='sm'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Task title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Form.Group>

          <Form.Group controlId='desc'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      )}

      <Row>{renderTaskList()}</Row>
    </div>
  )
}

export default TaskPage
