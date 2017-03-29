import React, { PropTypes } from 'react';
import Task from '../Task';
import PointsAccrued from './PointsAccrued';
import AddTaskContainer from '../../containers/AddTaskContainer';

const completedTasks = (task)=> (task.completed === true);

const sumAccruedPoints = (focus)=> (
  focus.tasks.filter(completedTasks).reduce((prev,next) => prev + next.points,0)
);


const getActiveTasks = (tasks, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return tasks.filter(t => !t.completed);
  case 'SHOW_ACTIVE':
    return tasks.filter(t => !t.completed);
  }
};

const getCompletedTasks = (tasks, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return tasks.filter(t => t.completed);
  case 'SHOW_ACTIVE':
    return [];
  }
};

const Focus = ({focus, filter, completeTask}) => (
  <article className="focus-article">
      <h1>
        { focus.title }
      </h1>

      <AddTaskContainer focusId={ focus.id }/>
      <ul className="focus-items">
        { getActiveTasks(focus.tasks,filter).map( (task) =>
          <Task key={ task.id } task={ task } completeTask={() => completeTask(task.id)} />
        )}
        { getCompletedTasks(focus.tasks,filter).map( (task) =>
          <Task key={ task.id } task={ task } completeTask={() => completeTask(task.id)} />
        )}
      </ul>

      <PointsAccrued points={ sumAccruedPoints(focus) } />
  </article>
);

Focus.propTypes = {
  completeTask: PropTypes.func.isRequired,
  focus: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array,
  }).isRequired,
  filter: PropTypes.string
};

export default Focus;
