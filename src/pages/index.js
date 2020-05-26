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
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Img)`
  width: 90%;
  height: 90vh;
  margin: 0 0.5rem;
`;

const StyledContentSection = styled.section`
  margin-top: 5rem;
`;

const StyledParagraph = styled.p``;

const IndexPage = ({ data }) => {
  const array = convertObjectToArray(data);
  return (
    <Layout>
      <PageWrapper>
        <StyledWrapper>
          <StyledContentSection>
            <StyledParagraph>
              Nathalie Jones is an international model and actress. She started her journey with modeling at the age of 15 in Poland. Since then she successfully worked both in Commercial and Print. During her studies in The Crakow School of Art, she collaborated with two majors Beauty Academy Artystyczna Alternatywa and Face Art. She completed editorial for Bella Gladys magazine in co-operation with fashion designer and photographer from Poland. In the age of 22, she moved to London to pursue her career. Her stay there resulted in a 2 magazine covers for the 'She magazine'. Currently, she lives in Los Angeles, California.
            </StyledParagraph>
          </StyledContentSection>
          {/*{array.map(item => (*/}
          {/*  <StyledImage fluid={item.childImageSharp.fluid} />*/}
          {/*))}*/}
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
