import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {Link} from 'gatsby';
import Hamburger from '../Hamburger/Hamburger';
import { navigation } from '../../../utils/helpers';
import { useScrollDirection } from '../../../utils/customHooks';

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

const StyledLogo = styled.p`
  font-size: 21px;
`;

const Header = ({ isOpen, toggleMenu }) => {
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));
  const headerRef = useRef(null);

  const { scrollDirection } = useScrollDirection();

  useEffect(() => {
    const header = headerRef.current;

    tl.to(header.children, {
      autoAlpha: 0,
      y: '-=10',
      duration: 0.4,
      stagger: 0.3
    }).to(header, { y: '-100%', autoAlpha: 0, duration: 0.5 });
  }, []);

  useEffect(() => {
    scrollDirection === 'down' ? tl.play() : tl.reverse();
  }, [scrollDirection]);

  return (
    <StyledHeader ref={headerRef}>
      <Hamburger onClick={toggleMenu} isOpen={isOpen} />
      <Link to={'/'}>
        <StyledLogo>Nathalie Jones</StyledLogo>
      </Link>
      <StyledNav>
        <StyledList>
          {navigation.map(item => (
            <Link to={item.link} key={item.name}>
              <StyledListItem>{item.name}</StyledListItem>
            </Link>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
