import React from 'react';
import PropTypes from 'prop-types';
import { StyledHamburger, InnerHamburger } from './Hamburger.styles';

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool
};

Hamburger.defaultProps = {
  isOpen: false
};

export default Hamburger;
