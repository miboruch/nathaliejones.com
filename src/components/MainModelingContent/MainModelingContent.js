import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import ModelingInfo from 'components/ModelingInfo/ModelingInfo';

const StyledWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding-top: 44px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 4em;

  ${({ theme }) => theme.mq.desktop}{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledImage = styled(Img)`
  position: relative;
  width: 100%;
  margin: 1em 0;
  filter: none;

  ${({ theme }) => theme.mq.desktop}{
    width: 800px;
    margin: .4em;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin: 4em 0;

  ${({ theme }) => theme.mq.tablet} {
    width: 400px;
  }
`;

const MainModelingContent = ({image}) => (
  <StyledWrapper>
    <ButtonWrapper>
    <StyledButton
        as="a"
        href="static/Modeling.pdf"
        download="Modeling Package">
        DOWNLOAD MODELING PACKAGE
    </StyledButton>
    </ButtonWrapper>

    

    <ImageWrapper>
      <StyledImage fluid = {image.image4.childImageSharp.fluid} />
      <ModelingInfo></ModelingInfo>
      {/* <StyledImage fluid = {image.image13.childImageSharp.fluid} /> */}
      <StyledImage fluid = {image.image5.childImageSharp.fluid} />
      <StyledImage fluid = {image.image6.childImageSharp.fluid} />
      <StyledImage fluid = {image.image7.childImageSharp.fluid} />
      <StyledImage fluid = {image.image8.childImageSharp.fluid} />
      <StyledImage fluid = {image.image9.childImageSharp.fluid} />
      <StyledImage fluid = {image.image10.childImageSharp.fluid} />
      <StyledImage fluid = {image.image11.childImageSharp.fluid} />
      <StyledImage fluid = {image.image12.childImageSharp.fluid} />
    </ImageWrapper>
  </StyledWrapper>
);

MainModelingContent.propTypes = {
  image: PropTypes.node.isRequired,
};

export default MainModelingContent;