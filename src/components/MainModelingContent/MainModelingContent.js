import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { convertObjectToArray } from '../../../utils/helpers';

const StyledWrapper = styled.div`
  width: 100%;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid #ccc;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100vh - 60px);
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ContentWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    padding: 0 4rem;
  }
`;

const StyledParagraph = styled.p`
  color: #666;
  letter-spacing: 1px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 4em;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const MainImage = styled(Img)`
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 49%;
    height: 100vh;
    align-self: flex-start;
  }
`;

const StyledImage = styled(Img)`
  width: 100%;
  margin: 1em 0;

  ${({ theme }) => theme.mq.standard} {
    width: 49%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  margin: 4rem 0;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
  color: #2d2d2d;

  ${({ theme }) => theme.mq.standard} {
    margin: 5rem 0;
    font-size: 34px;
  }
`;

const MainModelingContent = ({ image }) => {
  const { image4, ...images } = image;
  const imagesArray = convertObjectToArray(images);

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
            <Button href={'static/Modeling.pdf'}>
              Download modeling package
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
        <MainImage fluid={image4.childImageSharp.fluid} />
      </MainWrapper>
      <StyledHeading>Resume</StyledHeading>
      <ImageWrapper>
        {imagesArray.map((image, index) => (
          <StyledImage fluid={image.childImageSharp.fluid} key={index} />
        ))}
      </ImageWrapper>
    </StyledWrapper>
  );
};

MainModelingContent.propTypes = {
  image: PropTypes.node.isRequired
};

export default MainModelingContent;
