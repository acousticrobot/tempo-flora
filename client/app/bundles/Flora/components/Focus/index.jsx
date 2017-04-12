import React, { PropTypes } from 'react';
import Task from '../Task';
import Deed from '../Deed';
import PointsAccrued from './PointsAccrued';
import AddTaskContainer from '../../containers/AddTaskContainer';

const sumAccruedPoints = (focus)=> (
  focus.deeds.reduce((prev,next) => prev + next.points,0)
);

const getActiveTasks = (tasks, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return tasks;
  case 'SHOW_ACTIVE':
    return tasks;
  }
};

const getDeeds = (deeds, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return deeds;
  case 'SHOW_ACTIVE':
    return [];
  }
};

const Focus = ({focus, filter, completeTask, undoDeed}) => (
  <article className="focus-article">
      <h1>
        { focus.title }
        <nav className="nav-icon">
          <a className="nav-icon--link nav-icon--link_more" href="#"></a>
        </nav>
      </h1>

      <AddTaskContainer focusId={ focus.id }/>
      <ul className="focus-items">
        { getActiveTasks(focus.tasks, filter).map( (task) =>
          <Task key={ task.id } task={ task } completeTask={() => completeTask(task.id)} />
        )}
        { getDeeds(focus.deeds,filter).map( (deed) =>
          <Deed key={ deed.id } deed={ deed } undoDeed={() => undoDeed(deed.id)} />
        )}
      </ul>

      <PointsAccrued points={ sumAccruedPoints(focus) } />
  </article>
);

Focus.propTypes = {
  completeTask: PropTypes.func.isRequired,
  undoDeed: PropTypes.func.isRequired,
  focus: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array,
    deeds: PropTypes.array
  }).isRequired,
  filter: PropTypes.string
};

export default Focus;
