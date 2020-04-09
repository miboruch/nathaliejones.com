import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  z-index: 98;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.4s ease;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const MenuLinkWrapper = styled.ul`
  text-align: center;
  padding: 0;

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
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};
  padding: 1em 0;
  text-transform: uppercase;
  list-style-type: none;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 1s 0.3s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    transition: opacity 1s 0.5s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
`;

const MobileMenu = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <MenuLinkWrapper>
        <StyledLink to='/'>
          <StyledListItem isOpen={isOpen}>HOME</StyledListItem>
        </StyledLink>
        <StyledLink to='/acting'>
          <StyledListItem isOpen={isOpen}>acting</StyledListItem>
        </StyledLink>
        <StyledLink to='/modeling'>
          <StyledListItem isOpen={isOpen}>modeling</StyledListItem>
        </StyledLink>
        <StyledLink to='/demoreels'>
          <StyledListItem isOpen={isOpen}>demo reels</StyledListItem>
        </StyledLink>
        <StyledLink to='/contact'>
          <StyledListItem isOpen={isOpen}>contact</StyledListItem>
        </StyledLink>
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
