import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainModelingContent from '../components/MainModelingContent/MainModelingContent';
import Layout from '../templates/Layout';

const IndexPage = ({ data }) => {
  const { allFile, image1 } = data;
  return (
    <Layout>
      <MainModelingContent mainImage={image1} images={allFile.edges} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { regex: "/modeling/" } }) {
      edges {
        node {
          ...pageImage
        }
      }
    }
    image1: file(name: { regex: "/natalia13/" }) {
      ...pageImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default IndexPage;
