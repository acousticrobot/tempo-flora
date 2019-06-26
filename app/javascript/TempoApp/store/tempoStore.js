import { SHOW_STANDARD_OPTIONS, SHOW_ALL_TASKS, SHOW_ALL_FOCI } from '../../constants/filterTypes'
import { localStartOfDay, localEndOfDay } from '../../lib/Time'

const targetDate = localStartOfDay(new Date())
const targetEndDate = localEndOfDay(new Date())

export const initialState = {
  optionsFilter: SHOW_STANDARD_OPTIONS,
  taskFilter: SHOW_ALL_TASKS,
  targetDate,
  targetEndDate,
  focusFilter: {
    __typename: 'focusFilter',
    filter: SHOW_ALL_FOCI,
    focusId: null
  }
}

// TODO: research resolvers for client side store:
export const resolvers = {
  Mutation: {
    taskFilter: (_, { filter }, { cache }) => {
      cache.writeData({ data: { taskFilter: filter } })
      return null
    }
  }
}
