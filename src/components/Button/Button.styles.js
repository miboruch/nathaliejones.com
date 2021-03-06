import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #666;
  color: #666;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-family: 'Gilroy', sans-serif;
  margin-bottom: 2rem;

  &:hover {
    color: #fff;
    transition: color 0.14s ease;
  }
  &:focus {
    outline: none;
  }
  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #333;
    transition: all 0.25s ease;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
    transition: all 0.25s ease;
  }
  :disabled {
    opacity: 0.5;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 2rem;
    margin-right: 2rem;
  }
`;

export { StyledButton };
