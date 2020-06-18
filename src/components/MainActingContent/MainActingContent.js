import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { convertObjectToArray } from '../../../utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import {
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  ButtonWrapper
} from './MainActingContent.styles';

const MainActingContent = ({ image }) => {
  const imagesArray = convertObjectToArray(image);
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "pdf" }, name: { ne: "Modeling Package" } }
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
      <ButtonWrapper>
        {edges.map((file, index) => (
          <a href={file.node.publicURL} download={file.node.name} key={index}>
            <Button>DOWNLOAD {file.node.name}</Button>
          </a>
        ))}
      </ButtonWrapper>
      <ImageWrapper>
        {imagesArray.map((image, index) => (
          <StyledImage fluid={image.node.childImageSharp.fluid} key={index} />
        ))}
      </ImageWrapper>
    </StyledWrapper>
  );
};

MainActingContent.propTypes = {
  image: PropTypes.node.isRequired
};

export default MainActingContent;
