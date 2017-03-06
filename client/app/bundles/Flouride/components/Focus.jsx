import React, { PropTypes, Component } from 'react';
import Task from './Task';

class Focus extends Component {

  render () {
    return (
      <div>
          <h1>
            Focus { this.props.focus.title }
          </h1>
          <ul>
            {this.props.focus.tasks.map((task) =>
              <Task key={task.id} task={task} />
            )}
          </ul>
      </div>
    );
  }
}

Focus.propTypes = {
  focus: PropTypes.shape({
    id: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.object,
  }).isRequired,
};

export default Focus;
