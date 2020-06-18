import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({
  children,
  onClick,
  buttonTheme,
  type = 'button',
  disabled,
  ...props
}) => {
  return (
    <>
      {disabled ? (
        <StyledButton
          onClick={onClick}
          type={type}
          buttonTheme={buttonTheme}
          disabled
          {...props}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton onClick={onClick} type={type} buttonTheme={buttonTheme}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  buttonTheme: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
