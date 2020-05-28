import React from 'react';
import styled from 'styled-components';

import Hamburger from '../Hamburger/Hamburger';
import PageTransitionProvider from '../../providers/PageTransitionProvider';
import { navigation } from '../../../utils/helpers';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1em;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white};
  z-index: 99;
`;

const StyledNav = styled.nav`
  display: none;
  align-items: center;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;

  li::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.black};
    transition: width 0.3s;
  }

  li:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.black};
  flex-direction: row;
  padding: 0 1em;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

const Header = ({ isOpen, toggleMenu }) => {
  return (
    <StyledHeader>
      <Hamburger onClick={toggleMenu} isOpen={isOpen} />
      <PageTransitionProvider to={'/'}>
        <p>Nathalie Jones</p>
      </PageTransitionProvider>
      <StyledNav>
        <StyledList>
          {navigation.map(item => (
            <PageTransitionProvider to={item.link}>
              <StyledListItem>{item.name}</StyledListItem>
            </PageTransitionProvider>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
