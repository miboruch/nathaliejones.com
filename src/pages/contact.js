import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import ContactContent from 'components/ContactContent/ContactContent';

const IndexPage = ({ data }) => (
  <MainTemplate>
    <ContactContent image={data} />
  </MainTemplate>
);

export const pageContactImage = graphql`
  fragment pageContactImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    contact1: file(name: { regex: "/headshot1/" }) {
      ...pageContactImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;