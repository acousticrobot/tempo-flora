import React, { PropTypes, Component } from 'react';

class Task extends Component {

  render () {
    return (
      <li>
        Task { this.props.task.title }
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.id,
    title: PropTypes.string,
  }).isRequired,
};

export default Task;
