import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 4em;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledImage = styled(Img)`
  position: relative;
  width: 100%;
  margin: 1em 0;
  filter: none;

  ${({ theme }) => theme.mq.desktop} {
    width: 500px;
    margin: 0.4em;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
  }
`;

export { StyledWrapper, ImageWrapper, StyledImage, ButtonWrapper };
