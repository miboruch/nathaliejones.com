import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledHeading } from '../assets/styles/sharedStyles';
import Layout from '../templates/Layout';
import { convertObjectToArray } from '../../utils/helpers';
import PageTransitionProvider from '../providers/PageTransitionProvider';

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledImage = styled(Img)`
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 600px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 15px;
  color: #666;
  text-align: center;
  letter-spacing: 1px;
`;

const IndexPage = ({ data }) => {
  const { image1 } = data;
  const array = convertObjectToArray(data);
  return (
    <Layout>
      <PageWrapper className={'transition-wrapper'}>
        <StyledParagraph>
          Nathalie Jones is an international model and actress. She started her
          journey with modeling at the age of 15 in Poland. Since then she
          successfully worked both in Commercial and Print.
        </StyledParagraph>
        <StyledHeading>Portfolio</StyledHeading>
        <PageTransitionProvider to={'/contact'}>Contact</PageTransitionProvider>
        <StyledImage fluid={image1.childImageSharp.fluid} />
      </PageWrapper>
    </Layout>
  );
};

export const pageImage = graphql`
  fragment pageImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
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
    #    image2: file(name: { regex: "/headshot2/" }) {
    #      ...pageImage
    #    }
    #    image3: file(name: { regex: "/headshot3/" }) {
    #      ...pageImage
    #    }
    #    image4: file(name: { regex: "/natalia1/" }) {
    #      ...pageModelingImage
    #    }
    #    image5: file(name: { regex: "/natalia2/" }) {
    #      ...pageModelingImage
    #    }
    #    image6: file(name: { regex: "/natalia13/" }) {
    #      ...pageModelingImage
    #    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default IndexPage;
