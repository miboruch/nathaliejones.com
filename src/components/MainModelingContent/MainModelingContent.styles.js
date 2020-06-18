import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid #ccc;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100vh - 60px);
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ContentWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    padding: 0 4rem;
  }
`;

const StyledParagraph = styled.p`
  color: #666;
  letter-spacing: 1px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 4em;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const MainImage = styled(Img)`
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 49%;
    height: 100vh;
    align-self: flex-start;
  }
`;

const StyledImage = styled(Img)`
  width: 100%;
  margin: 1em 0;

  ${({ theme }) => theme.mq.standard} {
    width: 49%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  margin: 4rem 0;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
  color: #2d2d2d;

  ${({ theme }) => theme.mq.standard} {
    margin: 5rem 0;
    font-size: 34px;
  }
`;

export {
  StyledWrapper,
  MainWrapper,
  ContentWrapper,
  StyledParagraph,
  ImageWrapper,
  MainImage,
  StyledImage,
  ButtonWrapper,
  StyledHeading
};
