import React from 'react';
import PageTransitionProvider from '../../providers/PageTransitionProvider';
import { navigation, social } from '../../../utils/helpers';
import {
  StyledWrapper,
  StyledIconSection,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledBio
} from './Footer.styles';

const Footer = () => (
  <StyledWrapper>
    <StyledIconSection>
      {social.map((item, index) => (
        <a
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          key={index}
        >
          {item.component}
        </a>
      ))}
    </StyledIconSection>
    <StyledNav>
      <StyledList>
        {navigation.map(item => (
          <PageTransitionProvider to={item.link} key={item.name}>
            <StyledListItem>{item.name}</StyledListItem>
          </PageTransitionProvider>
        ))}
      </StyledList>
    </StyledNav>
    <StyledBio>
      NATHALIE JONES
      <br />
      901-337-1953
      <br />
      <a href='mailto: nathaliejones.info@yahoo.com'>
        nathaliejones.info@yahoo.com
      </a>
    </StyledBio>
  </StyledWrapper>
);

export default Footer;
