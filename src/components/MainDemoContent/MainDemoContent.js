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
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;

  ${({ theme }) => theme.mq.tablet}{
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop}{
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
    height: 400px;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop}{
    width: 100%;
    height: 800px;
    justify-content: center;
  }
`;


const MainDemoContent = () => (
  <StyledWrapper>
    <ButtonWrapper>
      <StyledButton
        as="a"
        href="static/Acting.pdf"
        download="Acting Package">
        DOWNLOAD ACTING PACKAGE
      </StyledButton>
      <StyledButton
        as="a"
        href="static/Headshots.pdf"
        download="Headshots and resume">
        DOWNLOAD HEADSHOTS AND RESUME
      </StyledButton>
    </ButtonWrapper>

    <VideoWrapper>
      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/K9ShlHKGRZc" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>

      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/CHQc-AnxmRg" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>

      <StyledVideo width="700" height="400" src="https://www.youtube.com/embed/tQwQ__0bdkc" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></StyledVideo>
    </VideoWrapper>
  </StyledWrapper>
);


export default MainDemoContent;