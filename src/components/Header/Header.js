import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white};
  z-index: 999;
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};
  letter-spacing: 2px;
  margin: 0;
  z-index: 9999;
`;

const StyledHamburger = styled(Hamburger)`
  ${({ theme }) => theme.mq.desktop}{
    display: none; /* Hamburger menu dla desktopa nie wyswietla sie */
  }
`;

/* Stylowanie headera dla desktopa */
const StyledNav = styled.nav`
  display: none;
  align-items: center;

  ${({ theme }) => theme.mq.desktop}{
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

  :first-child{
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

/* Koniec stylowania hedeara dla desktopa */

const Header = () => {
  const [isMenuOpen, setState] = useState(false);

  const toggleMenu = () => {
    setState(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <StyledLink to={'/'}><StyledHeading>Nathalie Jones</StyledHeading></StyledLink>
      <StyledHamburger onClick={toggleMenu} isOpen={isMenuOpen} />
        
        <StyledNav>
          <StyledList>
            <StyledLink to='/'><StyledListItem>Home</StyledListItem></StyledLink>
            <StyledLink to='/acting'><StyledListItem>Acting</StyledListItem></StyledLink>
            <StyledLink to='/modeling'><StyledListItem>Modeling</StyledListItem></StyledLink>
            <StyledLink to='/demoreels'><StyledListItem>Demo reels</StyledListItem></StyledLink>
            <StyledLink to='/contact'><StyledListItem>Contact</StyledListItem></StyledLink>
          </StyledList>
        </StyledNav>

      <MobileMenu isOpen={isMenuOpen} />
    </StyledHeader>
  );
};

//-----------------------

export const headerLogo = graphql`
  fragment headerLogo on File {
    childImageSharp {
      fluid(maxWidth: 200, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    logo: file(name: { regex: "/logo/" }) {
      ...headerLogo
    }
  }
`;

//----------------------


export default Header;
