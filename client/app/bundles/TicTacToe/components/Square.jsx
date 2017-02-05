import React, { PropTypes } from 'react';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
