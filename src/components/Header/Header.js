import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Hamburger from '../Hamburger/Hamburger';
import { useIsScrollOnTop } from '../../../utils/customHooks';
import PageTransitionProvider from '../../providers/PageTransitionProvider';

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

const StyledHeading = styled.h1`
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.medium};
  letter-spacing: 2px;
  margin: 0;
`;

/* Stylowanie headera dla desktopa */
const StyledNav = styled.nav`
  display: none;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  text-decoration: none;

  :first-child {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

/* Koniec stylowania hedeara dla desktopa */

const Header = ({ isOpen, toggleMenu }) => {
  return (
    <StyledHeader>
      <Hamburger onClick={toggleMenu} isOpen={isOpen} />
      <PageTransitionProvider to={'/'}>
        {/*<StyledHeading>Nathalie Jones</StyledHeading>*/}
        <p>LOGO</p>
      </PageTransitionProvider>

      <StyledNav>
        <StyledList>
          <StyledLink to='/'>
            <StyledListItem>Home</StyledListItem>
          </StyledLink>
          <StyledLink to='/acting'>
            <StyledListItem>Acting</StyledListItem>
          </StyledLink>
          <StyledLink to='/modeling'>
            <StyledListItem>Modeling</StyledListItem>
          </StyledLink>
          <StyledLink to='/demoreels'>
            <StyledListItem>Demo reels</StyledListItem>
          </StyledLink>
          <StyledLink to='/contact'>
            <StyledListItem>Contact</StyledListItem>
          </StyledLink>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
