import React, { PropTypes } from 'react';

const CSSMod = (status)=> (status ? 'completed' : 'imcomplete');
const CSS = (status)=> ('task-item--title task-item--title_' + CSSMod(status));

const TaskTitle = ({ title, completed, completeTask }) => (

  <div className={ CSS(completed) } onClick={ () => completeTask() } >
    { title }
  </div>
);

TaskTitle.propTypes = {
  completeTask: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskTitle;
