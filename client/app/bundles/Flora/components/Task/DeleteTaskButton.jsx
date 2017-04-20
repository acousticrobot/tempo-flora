import React, { PropTypes } from 'react';

const DeleteTaskButton = ({ deleteTask })=> (
  <div className="task-item--icon-wrapper">
    <div className="task-item--minus-icon"
      onClick={ () => { deleteTask(); }}
    ></div>
  </div>
);

DeleteTaskButton.propTypes = {
  deleteTask: PropTypes.func.isRequired,
};

export default DeleteTaskButton;



