import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5e5e0;
`;

const StyledIconSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 3em;
  justify-content: center;
`;

const StyledNav = styled.nav`
  width: 100%;
  text-align: center;
  margin: 2em 0;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.iconColor};
  text-transform: uppercase;
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 1.5rem 2rem;
  transition: 0.5s ease;

  :hover {
    color: ${({ theme }) => theme.black};
    transition: 0.5s ease;
  }
`;

const StyledBio = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.textColor};
  padding: 0.5em 0;
  margin-bottom: 2em;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export {
  StyledWrapper,
  StyledIconSection,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledBio
};
