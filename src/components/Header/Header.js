import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white };
  z-index: 999;
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};
  letter-spacing: 2px;
  margin: 0;
  z-index: 9999;
`;

const Header = () => {

  const [isMenuOpen, setState] = useState(false);

  const toggleMenu = () => {
    setState(!isMenuOpen);
  }

  return(
  <StyledHeader>
    <StyledHeading>Nathalie Jones</StyledHeading>
    <Hamburger onClick={toggleMenu} isOpen={isMenuOpen}/>
    <MobileMenu isOpen={isMenuOpen}/>
  </StyledHeader>
  );

};

export default Header;
