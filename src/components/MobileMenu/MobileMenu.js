import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby'; 

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.mobileMenuBackground};
  z-index: 998;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateX(${({isOpen}) => isOpen ? '0' : '-100%'});
  transition: transform 0.4s ease-in-out;
`;

const MenuLinkWrapper = styled.ul`
  text-align: center;
  padding: 0;
  
  li::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.black};
    transition: width .3s;
  }

  li:hover::after{
    width: 100%;
    transition: width .3s;
  }
`;

const MenuLink = styled.li`
  width: auto;
  font-family: ${({ theme }) => theme.font.family.raleway};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};
  padding: 1em 0;
  text-transform: uppercase;
  list-style-type: none;
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transition: opacity 1s 0.3s ease-in-out;
`;

const menuItems = [
  'home',
  'acting',
  'modeling',
  'demo reels',
  'contact',
]

const MobileMenu = ({isOpen}) => (
  <StyledWrapper isOpen={isOpen}>
    <MenuLinkWrapper>
      {menuItems.map(item=>(
        <MenuLink isOpen={isOpen} key={item}>{item}</MenuLink>
      ))}
    </MenuLinkWrapper>
  </StyledWrapper>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;