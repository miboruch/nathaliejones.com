import React from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: .5em;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.medium};
  letter-spacing: 2px;
  margin: 0;
`;

const Header = () => (
  <StyledHeader>
    <StyledHeading>Nathalie Jones</StyledHeading>
    <Hamburger></Hamburger>
  </StyledHeader>
);

export default Header;