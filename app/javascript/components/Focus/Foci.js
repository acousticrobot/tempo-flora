import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { DragDropContext } from 'react-beautiful-dnd'

import MOVE_TASK from '../../mutations/MoveTask'
import {
  SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS, SHOW_MORE_OPTIONS, SHOW_STANDARD_OPTIONS
} from '../../constants/filterTypes'

import Focus from './Focus'
import AddFocus from './AddFocus'

const getVisibleFoci = (foci, focusFilter) => {
  switch (focusFilter.filter) {
    case SHOW_ALL_FOCI:
      return foci
    case SHOW_SINGLE_FOCUS:
      return foci.filter(f => f.id === focusFilter.focusId)
    default:
      return foci
  }
}

const onDragEnd = (e, moveTask) => {
  const { source, destination, draggableId } = e
  if (!destination) {
    return
  }

  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  ) {
    return
  }
  moveTask({
    variables: {
      taskId: draggableId,
      position: parseInt(destination.index) + 1,
      focusId: destination.droppableId
    }
  })
}

const Foci = ({ foci, deedsSince, focusFilter, optionsFilter, completedAt }) => (
  <Mutation mutation={ MOVE_TASK }>
    { moveTask => (
      <DragDropContext onDragEnd={ e => onDragEnd(e, moveTask) }>
        { getVisibleFoci(foci, focusFilter).map(
          focus => (
            <Focus
              key={ focus.id }
              focus={ focus }
              deedsSince={ deedsSince }
              completedAt={ completedAt }
              optionsFilter={
                focusFilter.filter === SHOW_SINGLE_FOCUS ?
                  SHOW_MORE_OPTIONS : SHOW_STANDARD_OPTIONS
              }
            />
          )
        ) }

        { optionsFilter === SHOW_MORE_OPTIONS &&
          <AddFocus focusFilter={ focusFilter } deedsSince={ deedsSince } />
        }
      </DragDropContext>
    )}
  </Mutation>
)

Foci.propTypes = {
  foci: PropTypes.array.isRequired,
  deedsSince: PropTypes.string.isRequired,
  focusFilter: PropTypes.object.isRequired,
  optionsFilter: PropTypes.string.isRequired,
  completedAt: PropTypes.string.isRequired
}

export default Foci
