import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  margin: 1em 0;

  ${({ theme }) => theme.mq.tablet} {
    width: 400px;
    margin: 0 1em;
  }
`;

const VideoWrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  ${({ theme }) => theme.mq.desktop}{
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StyledVideo = styled.iframe`
  width: 100%;
  height: 300px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.tablet}{
    width: 100%;
    height: 500px;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop}{
    width: 75%;
    height: 600px;
    margin: 5rem auto;
  }
`;


const MainDemoContent = () => (
  <StyledWrapper>
    <ButtonWrapper>
      <StyledButton
        as="a"
        href="assets/documents/Acting.pdf"
        download="Acting Package">
        DOWNLOAD ACTING PACKAGE
      </StyledButton>
      <StyledButton
        as="a"
        href="assets/documents/Headshots.pdf"
        download="Headshots and resume">
        DOWNLOAD HEADSHOTS AND RESUME
      </StyledButton>
    </ButtonWrapper>

    <VideoWrapper>
      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/K9ShlHKGRZc" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>

      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/g6AN8mNDs8I" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>

      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/7PxVaam09Kk" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>

      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/e45_Cn1p2aE" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>
    </VideoWrapper>
  </StyledWrapper>
);


export default MainDemoContent;