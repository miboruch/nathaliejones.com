import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  position: relative;
  display: block;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.font.size.small};
  font-family: ${({ theme }) => theme.font.family.raleway};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.mobileMenuBackground};
  overflow: hidden;
  transition: 1s all ease;
  padding: .5em 0;
  background: transparent;
  letter-spacing: 2px;
  text-align: center;

  :hover{
    background: ${({ theme }) => theme.mobileMenuBackground};
  }

`;

export default Button;