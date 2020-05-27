import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainActingContent from '../components/MainActingContent/MainActingContent';
import Layout from '../templates/Layout';

const ActingPage = ({ data }) => (
  <Layout>
    <MainActingContent image={data} />
  </Layout>
);

export const pageActingImage = graphql`
  fragment pageActingImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image13: file(name: { regex: "/acting7/" }) {
      ...pageActingImage
    }
    image14: file(name: { regex: "/acting8/" }) {
      ...pageActingImage
    }
    image15: file(name: { regex: "/acting9/" }) {
      ...pageActingImage
    }
    image16: file(name: { regex: "/acting1/" }) {
      ...pageActingImage
    }
    image17: file(name: { regex: "/acting2/" }) {
      ...pageActingImage
    }
    image18: file(name: { regex: "/acting3/" }) {
      ...pageActingImage
    }
    image19: file(name: { regex: "/acting4/" }) {
      ...pageActingImage
    }
    image20: file(name: { regex: "/acting5/" }) {
      ...pageActingImage
    }
    image21: file(name: { regex: "/acting6/" }) {
      ...pageActingImage
    }
  }
`;

ActingPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default ActingPage;
