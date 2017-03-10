import React, { PropTypes, Component } from 'react';

class Task extends Component {

  render () {
    return (
      <li className="task-item">
        <div className="task-item-title">
          { this.props.task.title }
        </div>
        <div className="task-item-points">
          { this.props.task.points }
        </div>
        <div className="clear"></div>
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
