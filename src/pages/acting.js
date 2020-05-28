import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainActingContent from '../components/MainActingContent/MainActingContent';
import Layout from '../templates/Layout';

const ActingPage = ({ data }) => (
  <Layout>
    <MainActingContent image={data.allFile.edges} />
  </Layout>
);

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { regex: "/acting/" } }) {
      edges {
        node {
          ...pageImage
        }
      }
    }
  }
`;

ActingPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default ActingPage;
