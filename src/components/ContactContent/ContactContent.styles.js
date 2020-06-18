import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  color: #2d2d2d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    height: calc(100vh - 60px);
  }
`;

const StyledImage = styled(Img)`
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 600px;
    height: 100vh;
  }
`;

const StyledBio = styled.div`
  width: 100%;
  margin: 3em auto;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 1px;
  padding-bottom: 1em;

  a {
    color: inherit;
    text-decoration: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.medium};
  }

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    text-align: left;
    margin-left: 9rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 5rem;
  }
`;

const StyledSecondParagraph = styled.p`
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-top: 2rem;
`;

const StyledHeading = styled.h1`
  font-size: 21px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const StyledLinks = styled.section`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 400;

  ${({ theme }) => theme.mq.standard} {
    font-size: 17px;
  }
`;

export {
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  StyledBio,
  StyledSecondParagraph,
  StyledHeading,
  StyledLinks
};
