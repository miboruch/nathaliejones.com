import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: 18px;
  width: 100%;
  font-weight: 500;
  color: #2d2d2d;
  align-self: start;
  position: relative;
  letter-spacing: 1px;
  margin-bottom: 3rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
    transform: translateX(25%);
  }
`;
