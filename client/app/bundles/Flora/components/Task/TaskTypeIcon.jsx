import React, { PropTypes } from 'react';

const TaskTypeIcon = ({repeatable}) => {

  let type = repeatable ? 'repeat' : 'check-box';

  return (
    <div className={ `task-article--title-icon icon-${type}` }></div>
  );
};

TaskTypeIcon.propTypes = {
  repeatable: PropTypes.bool.isRequired
};

export default TaskTypeIcon;
