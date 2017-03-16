import React, { PropTypes, Component } from 'react';

const taskTitleCSS = (task)=> {
  const modifier = task.completed ? 'completed' : 'imcomplete';
  return 'task-item--title task-item--title_' + modifier;
};

class Task extends Component {

  render () {
    const titleCSS = taskTitleCSS(this.props.task);

    return (
      <li className='task-item'>
        <div className={ titleCSS } onClick={ () => this.props.completeTask() }>
          { this.props.task.title }
        </div>
        <div className='task-item--points'>
          { this.props.task.points }
        </div>
        <div className='clear'></div>
      </li>
    );
  }
}

Task.propTypes = {
  completeTask: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
