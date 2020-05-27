import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainModelingContent from '../components/MainModelingContent/MainModelingContent';
import Layout from '../templates/Layout';

const IndexPage = ({ data }) => (
  <Layout>
    <MainModelingContent image={data} />
  </Layout>
);

export const query = graphql`
  query {
    image4: file(name: { regex: "/natalia1/" }) {
      ...pageImage
    }
    image5: file(name: { regex: "/natalia2/" }) {
      ...pageImage
    }
    image6: file(name: { regex: "/natalia13/" }) {
      ...pageImage
    }
    image7: file(name: { regex: "/natalia4/" }) {
      ...pageImage
    }
    image8: file(name: { regex: "/natalia5/" }) {
      ...pageImage
    }
    image9: file(name: { regex: "/natalia6/" }) {
      ...pageImage
    }
    image10: file(name: { regex: "/natalia7/" }) {
      ...pageImage
    }
    image11: file(name: { regex: "/natalia8/" }) {
      ...pageImage
    }
    image12: file(name: { regex: "/natalia9/" }) {
      ...pageImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default IndexPage;
