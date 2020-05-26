import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from '../templates/MainTemplate';
import MainModelingContent from '../components/MainModelingContent/MainModelingContent';

const IndexPage = ({ data }) => (
  <MainTemplate>
    <MainModelingContent image={data}>asdasdasd</MainModelingContent>
  </MainTemplate>
);

export const pageModelingImage = graphql`
  fragment pageModelingImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image4: file(name: { regex: "/natalia1/" }) {
      ...pageModelingImage
    }
    image5: file(name: { regex: "/natalia2/" }) {
      ...pageModelingImage
    }
    image6: file(name: { regex: "/natalia13/" }) {
      ...pageModelingImage
    }
    image7: file(name: { regex: "/natalia4/" }) {
      ...pageModelingImage
    }
    image8: file(name: { regex: "/natalia5/" }) {
      ...pageModelingImage
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
    image13: file(name: { regex: "/description/" }) {
      ...pageImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default IndexPage;
