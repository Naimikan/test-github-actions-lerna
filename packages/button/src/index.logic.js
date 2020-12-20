import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, onClick }) => {
  const childrenToRender = children.constructor === Function ? children : () => children;

  return (
    <button className={`test-button ${className}`} onClick={onClick}>
      {childrenToRender()}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: null,
  onClick: () => {},
};

export default Button;
