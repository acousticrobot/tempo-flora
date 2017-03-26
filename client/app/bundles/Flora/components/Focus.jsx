import React, { PropTypes } from 'react';
import Task from './Task';
import PointsAccrued from './Focus/PointsAccrued';

const completedTasks = (task)=> (task.completed === true);

const sumAccruedPoints = (focus)=> (
  focus.tasks.filter(completedTasks).reduce((prev,next) => prev + next.points,0)
);


const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return tasks;
  case 'SHOW_ACTIVE':
    return tasks.filter(t => !t.completed);
  }
};

const Focus = ({focus, filter, completeTask}) => (
  <article className="focus-article">
      <h1>
        { focus.title }
      </h1>
      <ul className="focus-items">
        { getVisibleTasks(focus.tasks,filter).map( (task) =>
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
