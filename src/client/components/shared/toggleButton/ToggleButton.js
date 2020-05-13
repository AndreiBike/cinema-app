import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = (props) => {

  const {
    toggleClassName,
    toggleOnClick,
    toggleText
  } = props;

  return (
    <button
      className={toggleClassName}
      onClick={toggleOnClick}>
      <span>
        {toggleText}
      </span>
    </button>
  )
}

ToggleButton.propTypes = {
  toggleClassName: PropTypes.string,
  toggleOnClick: PropTypes.func,
  toggleText: PropTypes.string,
}

export default ToggleButton;