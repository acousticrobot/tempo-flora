import React, { PropTypes } from 'react';

const DeleteTaskButton = ({ deleteTask })=> (
  <div
    className="task-item--button" //"task-item--icon-wrapper"
    onClick={ () => { deleteTask(); }}
  > Delete Task
  <div className="task-item--button-icon minus"></div>
  </div>
);

DeleteTaskButton.propTypes = {
  deleteTask: PropTypes.func.isRequired,
};

export default DeleteTaskButton;



