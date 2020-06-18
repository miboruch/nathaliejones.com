import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { graphql, useStaticQuery } from 'gatsby';
import {
  StyledWrapper,
  MainWrapper,
  ContentWrapper,
  StyledParagraph,
  ImageWrapper,
  MainImage,
  StyledImage,
  ButtonWrapper,
  StyledHeading
} from './MainModelingContent.styles';

const MainModelingContent = ({ mainImage, images }) => {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "pdf" }, name: { regex: "/Modeling/" } }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      <MainWrapper>
        <ContentWrapper>
          <StyledParagraph>
            Nathalie Jones is an international model and actress. She started
            her journey with modeling at the age of 15 in Poland. Since then she
            successfully worked both in Commercial and Print. During her studies
            in The Crakow School of Art, she collaborated with two majors Beauty
            Academy Artystyczna Alternatywa and Face Art. She completed
            editorial for Bella Gladys magazine in co-operation with fashion
            designer and photographer from Poland. At the age of 22, she moved
            to London to pursue her career. Her stay there resulted in a 2
            magazine covers for the 'She magazine'. Currently, she lives in Los
            Angeles, California.
          </StyledParagraph>
          <ButtonWrapper>
            <a href={edges[0].node.publicURL} download={edges[0].node.name}>
              <Button>Download {edges[0].node.name}</Button>
            </a>
          </ButtonWrapper>
        </ContentWrapper>
        <MainImage fluid={mainImage.childImageSharp.fluid} />
      </MainWrapper>
      <StyledHeading>Portfolio</StyledHeading>
      <ImageWrapper>
        {images.map((image, index) => (
          <StyledImage fluid={image.node.childImageSharp.fluid} key={index} />
        ))}
      </ImageWrapper>
    </StyledWrapper>
  );
};

MainModelingContent.propTypes = {
  images: PropTypes.any,
  mainImage: PropTypes.any
};

export default MainModelingContent;
