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
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.mobileMenuBackground};
`;

const StyledIcon = styled(Icon)`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 1em;

  svg {
    width: 21px;
    height: 21px;
    fill: ${({ theme }) => theme.iconColor};
    transition: fill 0.5s;
  }

  svg:hover {
    fill: ${({ theme }) => theme.black};
    transition: fill 0.5s ease-in-out;
  }

  .isvg {
    height: 21px;
  }
`;

const StyledA = styled.a`
  ::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.black};
    transition: width .5s;
  }

  :hover::after{
    width: 100%;
    transition: width .5s;
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
  margin: 2em 0;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${({ theme }) => theme.mq.desktop}{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.iconColor};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.raleway};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 2px;
  margin: 1.5em;
  margin-bottom: 1em;
  transition: .5s ease;

  :hover{
    color: ${({ theme }) => theme.black};
    transition: .5s ease;
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

  a {
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
      <StyledA
        href="https://www.facebook.com/natalia.boruch.16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon src={iconFacebook} />
      </StyledA>
      <StyledA
        href="https://www.instagram.com/delphrezia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon src={iconInstagram} />
      </StyledA>
      <StyledA
        href="https://www.youtube.com/channel/UCvZu9v2uiExUonC1swEH64g?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon src={iconYoutube} />
      </StyledA>
      <StyledA
        href="https://www.imdb.com/name/nm10412750/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon src={iconImdb} />
      </StyledA>
    </StyledIconSection>

    <StyledNav>
      <StyledList>
        <StyledLink to="/">
          <StyledListItem>home</StyledListItem>
        </StyledLink>

        <StyledLink to="/acting">
          <StyledListItem>acting</StyledListItem>
        </StyledLink>

        <StyledLink to="/modeling">
          <StyledListItem>modeling</StyledListItem>
        </StyledLink>

        <StyledLink to="/demoreels">
          <StyledListItem>demo reels</StyledListItem>
        </StyledLink>

        <StyledLink to="/contact">
          <StyledListItem>contact</StyledListItem>
        </StyledLink>
      </StyledList>
    </StyledNav>

    <StyledBio>
      NATHALIE JONES
      <br />
      901-337-1953
      <br />
      <a href="mailto: nathaliejones.info@yahoo.com">
        nathaliejones.info@yahoo.com
      </a>
    </StyledBio>
  </StyledWrapper>
);

export default Footer;
