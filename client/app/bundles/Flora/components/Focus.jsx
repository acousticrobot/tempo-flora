import React, { PropTypes, Component } from 'react';
import Task from './Task';

class Focus extends Component {

  render () {
    return (
      <article className="focus-article">
          <h1>
            { this.props.focus.title }
          </h1>
          <ul className="focus-items">
            {this.props.focus.tasks.map((task) =>
              <Task key={ task.id } task={ task } completeTask={() => this.props.completeTask(task.id)} />
            )}
          </ul>
      </article>
    );
  }
}

Focus.propTypes = {
  completeTask: PropTypes.func.isRequired,
  focus: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array,
  }).isRequired,
};

export default Focus;
