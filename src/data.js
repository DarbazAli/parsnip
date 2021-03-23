import { uniqueId } from './actions'

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The Store, Actions, and Reucers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peac on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
]

export default mockTasks
