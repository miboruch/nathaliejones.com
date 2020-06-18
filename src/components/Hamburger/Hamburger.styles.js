import styled from 'styled-components';

const StyledHamburger = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: none;
  background: none;
  width: 50px;
  height: 30px;
  padding: 1rem;
  margin-right: 1rem;
  box-sizing: content-box;
  cursor: pointer;
  z-index: 100;

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const InnerHamburger = styled.div`
  position: relative;
  transition: background-color 0.15s ease;

  ::after,
  ::before {
    content: '';
    position: absolute;
    right: 0;
    height: 1px;
    background-color: #000;
    transition: transform 0.25s ease, width 0.25s ease;
  }

  ::before {
    width: ${({ isOpen }) => (isOpen ? '32px' : '26px')};
    top: -3px;
    transform: translateY(${({ isOpen }) => (isOpen ? '3px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '38deg' : '0')});
  }

  ::after {
    width: 32px;
    top: 3px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-3px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-38deg' : '0')});
  }
`;

export { StyledHamburger, InnerHamburger };
