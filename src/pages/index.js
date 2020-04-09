import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HeroTemplate from '../templates/HeroTemplate/HeroTemplate';
import Layout from '../templates/Layout';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { convertObjectToArray } from '../../utils/helpers';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  overflow-x: scroll;
  padding-left: 3rem;
`;

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  margin: 0 0.5rem;

  ${({ theme }) => theme.mq.desktop} {
    margin: 1em 0.4em;
  }
`;

const IndexPage = ({ data }) => {
  const array = convertObjectToArray(data);
  return (
    <Layout>
      <PageWrapper>
        <StyledWrapper>
          {array.map(item => (
            <StyledImage fluid={item.childImageSharp.fluid} />
          ))}
        </StyledWrapper>
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
    image2: file(name: { regex: "/headshot2/" }) {
      ...pageImage
    }
    image3: file(name: { regex: "/headshot3/" }) {
      ...pageImage
    }
    image4: file(name: { regex: "/natalia1/" }) {
      ...pageModelingImage
    }
    image5: file(name: { regex: "/natalia2/" }) {
      ...pageModelingImage
    }
    image6: file(name: { regex: "/natalia13/" }) {
      ...pageModelingImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default IndexPage;
