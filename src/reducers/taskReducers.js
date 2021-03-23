import data from '../data'
export const tasks = (state = { tasks: data }, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return { tasks: state.tasks.concat(action.payload) }
    case 'EDIT_TASK':
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return Object.assign({}, task, action.payload.params)
          }
          return task
        }),
      }
    default:
      return state
  }
}
