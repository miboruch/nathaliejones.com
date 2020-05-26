import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 44px;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.raleway};
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 54px auto;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`;

const StyledImage = styled(Img)`
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

const StyledHeading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: 2rem 0;
`;

const StyledBio = styled.div`
  width: 100%;
  margin: 3em auto;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: 2.2;
  letter-spacing: 1px;
  padding-bottom: 1em;

  a {
    color: inherit;
    text-decoration: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.medium};
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin: 0;
`;

const StyledSecondParagraph = styled.p`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin: 0;
`;

const ContactContent = ({ image }) => (
  <StyledWrapper className={'transition-wrapper'}>
    <ImageWrapper>
      <StyledImage fluid={image.contact1.childImageSharp.fluid} />
    </ImageWrapper>
    <StyledBio>
      <StyledParagraph>
        Acting is more than a passion. It's a source of excitement and joy...
      </StyledParagraph>
      <StyledHeading>For collaboration contact</StyledHeading>
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
      <StyledSecondParagraph>Los Angeles, California</StyledSecondParagraph>
    </StyledBio>
  </StyledWrapper>
);

ContactContent.propTypes = {
  image: PropTypes.node.isRequired
};

export default ContactContent;
