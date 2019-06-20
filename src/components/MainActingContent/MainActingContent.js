import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

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
    width: 500px;
    margin: .4em;
  }
`;


const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 50px;

  ${({ theme }) => theme.mq.desktop}{
    width: 40%;
  }

`;

const StyledButton = styled(Button)`
  margin: .5em 0;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop}{
    width: 100%;
  }
`;

const MainActingContent = ({image}) => (
  <StyledWrapper>
    <ButtonWrapper>
      <StyledButton
        as="a"
        href="static/Acting.pdf"
        download="Acting Package">
        DOWNLOAD ACTING PACKAGE
      </StyledButton>
      <StyledButton
        as="a"
        href="static/Headshots.pdf"
        download="Headshots and resume">
        DOWNLOAD HEADSHOTS AND RESUME
      </StyledButton>
    </ButtonWrapper>

    <ImageWrapper>
      <StyledImage fluid = {image.image13.childImageSharp.fluid} />
      <StyledImage fluid = {image.image14.childImageSharp.fluid} />
      <StyledImage fluid = {image.image15.childImageSharp.fluid} />
      <StyledImage fluid = {image.image16.childImageSharp.fluid} />
      <StyledImage fluid = {image.image17.childImageSharp.fluid} />
      <StyledImage fluid = {image.image18.childImageSharp.fluid} />
      <StyledImage fluid = {image.image19.childImageSharp.fluid} />
      <StyledImage fluid = {image.image20.childImageSharp.fluid} />
      <StyledImage fluid = {image.image21.childImageSharp.fluid} />
    </ImageWrapper>
  </StyledWrapper>
);

MainActingContent.propTypes = {
  image: PropTypes.node.isRequired,
};

export default MainActingContent;
