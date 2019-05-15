import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 44px;
`;

const StyledImage = styled(Img)`
  width: 100%;
  margin: 1em 0; 
`;

const MainContent = ({image}) => (
  <StyledWrapper>
    <StyledImage fluid={image.image1.childImageSharp.fluid}/>
    <StyledImage fluid={image.image2.childImageSharp.fluid}/>
    <StyledImage fluid={image.image3.childImageSharp.fluid}/>
  </StyledWrapper>
);

MainContent.propTypes = {
  image: PropTypes.node.isRequired,
};


export default MainContent;