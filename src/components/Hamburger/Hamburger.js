import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  border: none;
  background: none;
  padding: 10px;
`;

const InnerHamburger = styled.div`
  position: relative;
  width: 22px;
  height: 1px;
  background-color: ${({ theme }) => theme.black};

  ::after, ::before{
    content: '';
    position: absolute;
    left: 0;
    width: 22px;
    height: 1px;
    background-color: ${({ theme }) => theme.black};
  }

  ::before{
    top: -6px;
  }

  ::after{
    top: 6px;
  }

`;

const Hamburger = () => (
  <StyledHamburger>
    <InnerHamburger></InnerHamburger>
  </StyledHamburger>
);

export default Hamburger;