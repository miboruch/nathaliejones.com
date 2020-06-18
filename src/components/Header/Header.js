import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hamburger from '../Hamburger/Hamburger';
import { navigation } from '../../../utils/helpers';
import { useScrollDirection } from '../../../utils/customHooks';
import PageTransitionProvider from '../../providers/PageTransitionProvider';
import {
  StyledHeader,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLogo
} from './Header.styles';

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
      <PageTransitionProvider to={'/'}>
        <StyledLogo>Nathalie Jones</StyledLogo>
      </PageTransitionProvider>
      <StyledNav>
        <StyledList>
          {navigation.map(item => (
            <PageTransitionProvider to={item.link} key={item.name}>
              <StyledListItem>{item.name}</StyledListItem>
            </PageTransitionProvider>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
