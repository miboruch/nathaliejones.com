import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #666;
  color: #666;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-family: 'Gilroy', sans-serif;

/* e0d4c0 */

  &:hover {
    color: #fff;
    transition: color 0.14s ease;
  }
  &:focus {
    outline: none;
  }
  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #666;
    transition: all 0.25s ease;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
    transition: all 0.25s ease;
  }
  :disabled {
    opacity: 0.5;
  }
`;

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
