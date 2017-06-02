import React, { PropTypes } from 'react';

const DeleteTaskButton = ({ deleteTask })=> (
  <div
    className="task-article--item task-article--item_full"
    onClick={ () => { deleteTask(); }}
  > Delete Task
  <div className="task-article--icon minus"></div>
  </div>
);

DeleteTaskButton.propTypes = {
  deleteTask: PropTypes.func.isRequired,
};

export default DeleteTaskButton;



