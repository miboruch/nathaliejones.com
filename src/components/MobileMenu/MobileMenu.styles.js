import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 98;
  transform: translateX(-100%);

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

const StyledMenuItem = styled.p`
  color: #2d2d2d;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.font.size.medium};
  text-transform: uppercase;
`;

export { StyledWrapper, MenuLinkWrapper, StyledMenuItem };
