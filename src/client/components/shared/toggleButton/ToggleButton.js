import React from 'react';

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

}

export default ToggleButton;