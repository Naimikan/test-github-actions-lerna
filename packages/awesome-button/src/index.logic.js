import React from 'react';
import PropTypes from 'prop-types';

import Button from '@test/button';

const AwesomeButton = ({ className, children, onClick }) => {
  const childrenToRender = children.constructor === Function ? children : () => children;

  return (
    <Button className={`test-awesome-button ${className}`} onClick={onClick}>
      {childrenToRender()}
    </Button>
  );
};

AwesomeButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
};

AwesomeButton.defaultProps = {
  className: '',
  children: null,
  onClick: () => {},
};

export default AwesomeButton;
