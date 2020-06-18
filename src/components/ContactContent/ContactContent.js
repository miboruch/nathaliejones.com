import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  StyledBio,
  StyledSecondParagraph,
  StyledHeading,
  StyledLinks
} from './ContactContent.styles';

const ContactContent = ({ image }) => (
  <StyledWrapper className={'transition-wrapper'}>
    <ImageWrapper>
      <StyledImage fluid={image.contact1.childImageSharp.fluid} />
    </ImageWrapper>
    <StyledBio>
      <StyledHeading>Contact</StyledHeading>
      <StyledLinks>
        <a href='mailto: nathaliejones.info@yahoo.com'>
          nathaliejones.info@yahoo.com
        </a>
        <br />
        US: +1 901-337-1953
        <br />
        UK: +44 0751-384-6886
        <br />
        PL: +48 609-682-811
        <br />
      </StyledLinks>
      <StyledSecondParagraph>Los Angeles, California</StyledSecondParagraph>
    </StyledBio>
  </StyledWrapper>
);

ContactContent.propTypes = {
  image: PropTypes.any
};

export default ContactContent;
