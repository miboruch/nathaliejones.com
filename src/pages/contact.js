import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ContactContent from '../components/ContactContent/ContactContent';
import Layout from '../templates/Layout';

const IndexPage = ({ data }) => (
  <Layout>
    <ContactContent image={data} />
  </Layout>
);

export const query = graphql`
  query {
    contact1: file(name: { regex: "/headshot1/" }) {
      ...pageImage
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired
};

export default IndexPage;
