import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledHeading } from '../assets/styles/sharedStyles';
import Layout from '../templates/Layout';
import { convertObjectToArray } from '../../utils/helpers';

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ theme }) => theme.mq.standard} {
    justify-content: center;
    align-items: center;
  }
`;

const StyledImage = styled(Img)`
  width: 100%;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 800px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 500px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 15px;
  color: #666;
  text-align: center;
  letter-spacing: 1px;

  ${({ theme }) => theme.mq.standard} {
    width: 400px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mq.standard} {
    align-items: center;
    justify-content: space-around;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ImageBox = styled.section`
  display: flex;
  flex-direction: column;
  color: #666;
  margin-bottom: 2rem;
`;

const IndexPage = ({ data }) => {
  const imagesArray = convertObjectToArray(data);
  return (
    <Layout>
      <PageWrapper className={'transition-wrapper'}>
        <StyledParagraph>
          Nathalie Jones is an international model and actress. She started her
          journey with modeling at the age of 15 in Poland. Since then she
          successfully worked both in Commercial and Print.
        </StyledParagraph>
        <StyledHeading>Portfolio</StyledHeading>
        <ImageWrapper>
          {imagesArray.map((image, index) => (
            <ImageBox key={index}>
              <StyledImage fluid={image.childImageSharp.fluid} />
            </ImageBox>
          ))}
        </ImageWrapper>
      </PageWrapper>
    </Layout>
  );
};

export const pageImage = graphql`
  fragment pageImage on File {
    childImageSharp {
      fluid(maxWidth: 800, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/headshot1/" }) {
      ...pageImage
    }
    image2: file(name: { regex: "/headshot2/" }) {
      ...pageImage
    }
    image3: file(name: { regex: "/headshot3/" }) {
      ...pageImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.any
};

export default IndexPage;
