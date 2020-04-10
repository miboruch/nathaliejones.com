import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { Link } from 'gatsby';
import { pageNavigation } from '../../../utils/pageNaviagation';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 98;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const MenuLinkWrapper = styled.ul`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.font.size.medium};
  padding: 1em 0;
  text-transform: uppercase;
  list-style-type: none;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 1s 0.3s ease-in-out;
`;

const MobileMenu = ({ isOpen }) => {
  const wrapperRef = useRef(null);
  const menuItemsRef = useRef(null);
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));

  useEffect(() => {
    const wrapperBox = wrapperRef.current;
    const menuItems = menuItemsRef.current.children;

    gsap.set(menuItems, { autoAlpha: 0, x: '-=20' });

    tl.fromTo(
      wrapperBox,
      { transform: 'translateX(-100%)' },
      { transform: 'translateX(0)', duration: 0.7 }
    ).to(menuItems, { autoAlpha: 1, stagger: 0.2, x: '0', duration: 1 }, '-=0.4');
  }, []);

  useEffect(() => {
    isOpen ? tl.play() : tl.reverse();
  }, [isOpen]);

  return (
    <StyledWrapper isOpen={isOpen} ref={wrapperRef}>
      <MenuLinkWrapper ref={menuItemsRef}>
        {pageNavigation.map(item => (
          <StyledLink to={item.path} key={item.name} isOpen={isOpen}>
            {item.name}
          </StyledLink>
        ))}
      </MenuLinkWrapper>
    </StyledWrapper>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool
};

MobileMenu.defaultProps = {
  isOpen: false
};

export default MobileMenu;
