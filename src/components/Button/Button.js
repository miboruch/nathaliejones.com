import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  position: relative;
  display: block;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.font.size.small};
  font-family: ${({ theme }) => theme.font.family.raleway};
  text-decoration: none;
  border: 1px solid #FFB5A6;
  overflow: hidden;
  transition: 1s all ease;
  padding: 0.5em 0;
  background: ${({ theme }) => theme.white};
  letter-spacing: 1px;
  text-align: center;

  ::before{
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    top: 0;
    left: 0;
    background: #FFB5A6;
    transform: translateX(-58px);
    transition: width .5s ease;
  }

  :hover::before{
    width: 65px;
    transition: width .3s ease;
  }

`;

export default Button;
