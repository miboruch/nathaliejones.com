import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 4em;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImage = styled(Img)`
  position: relative;
  width: 100%;
  margin: 1em 0;
  filter: none;

  ${({ theme }) => theme.mq.standard} {
    width: 800px;
    margin: 0.4em;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ContentWrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const MainModelingContent = ({ image }) => {
  const { image4, ...images } = image;
  console.log(image4, images);
  return (
    <StyledWrapper>
      <ButtonWrapper>
        <Button href={'static/Modeling.pdf'}>Download modeling package</Button>
      </ButtonWrapper>

      <MainWrapper>
        <ContentWrapper>Hello my friend</ContentWrapper>
        <StyledImage fluid={image.image4.childImageSharp.fluid} />
      </MainWrapper>

      <ImageWrapper>
        {/*<ModelingInfo></ModelingInfo>*/}
        {/* <StyledImage fluid = {image.image13.childImageSharp.fluid} /> */}
        <StyledImage fluid={image.image5.childImageSharp.fluid} />
        <StyledImage fluid={image.image6.childImageSharp.fluid} />
        <StyledImage fluid={image.image7.childImageSharp.fluid} />
        <StyledImage fluid={image.image8.childImageSharp.fluid} />
        <StyledImage fluid={image.image9.childImageSharp.fluid} />
        <StyledImage fluid={image.image10.childImageSharp.fluid} />
        <StyledImage fluid={image.image11.childImageSharp.fluid} />
        <StyledImage fluid={image.image12.childImageSharp.fluid} />
      </ImageWrapper>
    </StyledWrapper>
  );
};

MainModelingContent.propTypes = {
  image: PropTypes.node.isRequired
};

export default MainModelingContent;
