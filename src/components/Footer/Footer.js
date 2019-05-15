import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Icon from 'components/Icon/Icon';
import iconYoutube from 'assets/images/youtube-icon.svg';
import iconInstagram from 'assets/images/instagram-icon.svg';
import iconFacebook from 'assets/images/facebook-icon.svg';
import iconImdb from 'assets/images/imdb-icon.svg';


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.mobileMenuBackground};
`;

const StyledIcon = styled(Icon)`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.iconBackground };
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 1em;

  svg{
    width: 21px;
    height: 21px;
    fill: ${({ theme }) => theme.iconColor };
    transition: fill .5s;
  }

  svg:hover{
    fill: ${({ theme }) => theme.black};
    transition: fill .5s ease-in-out;
  }

  .isvg{
    height: 21px;
  }
`;

const StyledIconSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 1.5em;
  justify-content: center;
`;

const StyledNav = styled.nav`
  width: 100%;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.iconColor };
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.raleway};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 2px;
  margin-bottom: 1em;
`;

const StyledBio = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.textColor};
  padding: .5em 0;
  margin-bottom: 2em;
  letter-spacing: 1px;
  line-height: 1.5;

  a{
    color: inherit;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Footer = () => (
  <StyledWrapper>
    <StyledIconSection>
      <a href = 'https://www.facebook.com/natalia.boruch.16' 
         target="_blank" 
         rel = "noopener noreferrer">
        <StyledIcon src={iconFacebook}/>
      </a>
      <a href = 'https://www.instagram.com/delphrezia/' 
         target="_blank" 
         rel = "noopener noreferrer">
        <StyledIcon src={iconInstagram}/>
      </a>
      <a href = 'https://www.youtube.com/channel/UCvZu9v2uiExUonC1swEH64g?view_as=subscriber' 
         target="_blank" 
         rel = "noopener noreferrer">
        <StyledIcon src={iconYoutube}/>
      </a>
      <a href = 'https://www.imdb.com/name/nm10412750/' 
         target="_blank" 
         rel = "noopener noreferrer">
        <StyledIcon src={iconImdb}/>
      </a>
    </StyledIconSection>

    <StyledNav>
      <StyledList>
        <StyledLink to='/'><StyledListItem>home</StyledListItem></StyledLink>
        <StyledListItem>acting</StyledListItem>
        <StyledLink to='/modeling'><StyledListItem>modeling</StyledListItem></StyledLink>
        <StyledListItem>demo reels</StyledListItem>
        <StyledListItem>contact</StyledListItem>
      </StyledList>
    </StyledNav>

    <StyledBio>
      NATHALIE JONES<br/>
      901-337-1953<br/>
      <a href = "mailto: nathaliejones.info@yahoo.com">nathaliejones.info@yahoo.com</a>
    </StyledBio>

  </StyledWrapper>
);

export default Footer;