import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate';

const IndexPage = ({ data }) => (
  <MainTemplate>
    <HeroTemplate image={data} />
  </MainTemplate>
);

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
    image2: file(name: { regex: "/headshot23/" }) {
      ...pageImage
    }
    image3: file(name: { regex: "/headshot3/" }) {
      ...pageImage
    }
   }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;
