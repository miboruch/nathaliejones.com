import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { pageNavigation } from '../../../utils/pageNaviagation';
import PageTransitionProvider from '../../providers/PageTransitionProvider';
import {
  StyledWrapper,
  MenuLinkWrapper,
  StyledMenuItem
} from './MobileMenu.styles';

const MobileMenu = ({ isOpen, setOpen }) => {
  const wrapperRef = useRef(null);
  const menuItemsRef = useRef(null);
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));

  useEffect(() => {
    const wrapperBox = wrapperRef.current;
    const menuItems = menuItemsRef.current;

    gsap.set(menuItems.children, { autoAlpha: 0 });

    tl.fromTo(
      wrapperBox,
      { transform: 'translateX(-100%)' },
      { transform: 'translateX(0)', duration: 0.7 }
    ).fromTo(
      menuItems.children,
      { x: '-=10', y: '-=15' },
      { autoAlpha: 1, x: '0', y: '0', stagger: 0.1, duration: 0.6 },
      '-=0.4'
    );
  }, []);

  useEffect(() => {
    isOpen ? tl.play() : tl.reverse();
  }, [isOpen]);

  return (
    <StyledWrapper ref={wrapperRef}>
      <MenuLinkWrapper ref={menuItemsRef}>
        {pageNavigation.map(item => (
          <PageTransitionProvider to={item.path} key={item.name}>
            <StyledMenuItem onClick={() => setOpen(false)}>
              {item.name}
            </StyledMenuItem>
          </PageTransitionProvider>
        ))}
      </MenuLinkWrapper>
    </StyledWrapper>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func
};

MobileMenu.defaultProps = {
  isOpen: false
};

export default MobileMenu;
