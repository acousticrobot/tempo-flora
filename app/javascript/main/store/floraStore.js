import { SHOW_MORE_OPTIONS, SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS, SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../constants/filterTypes'


export const initialState = {
  optionsFilter:  SHOW_MORE_OPTIONS,
  taskFilter:  SHOW_ALL_TASKS,
  focusFilter: {
    __typename: "focusFilter",
    filter: SHOW_ALL_FOCI,
    focusId: null }
};

export const resolvers = {
  Mutation: {
    taskFilter: (_, { filter }, { cache }) => {
      cache.writeData({ data: { taskFilter: filter } });
      return null;
    }
  }
}
