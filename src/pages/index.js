import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeroTemplate from '../templates/HeroTemplate/HeroTemplate';
import Layout from '../templates/Layout';
import { convertObjectToArray } from '../../utils/helpers';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  white-space: nowrap;
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  overflow-x: scroll;
  padding-left: 1rem;
  padding-bottom: 1rem;

  ${({ theme }) => theme.mq.standard} {
    padding-left: 3rem;
  }
`;

const StyledImage = styled(Img)`
  width: 90%;
  height: 90vh;
  margin: 0 0.5rem;
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
