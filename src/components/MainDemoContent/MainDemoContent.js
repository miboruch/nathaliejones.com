import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Video from '../Video/Video';

const StyledWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

const VideoWrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;

  ${({ theme }) => theme.mq.tablet} {
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StyledVideo = styled.iframe`
  width: 100%;
  height: 300px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    height: 400px;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 800px;
    justify-content: center;
  }
`;

const MainDemoContent = () => (
  <StyledWrapper className={'transition-wrapper'}>
    <ButtonWrapper>
      <Button href='static/Acting.pdf' download='Acting Package'>
        DOWNLOAD ACTING PACKAGE
      </Button>
      <Button href='static/Headshots.pdf' download='Headshots and resume'>
        DOWNLOAD HEADSHOTS AND RESUME
      </Button>
    </ButtonWrapper>

    <VideoWrapper>
      <Video
        videoSrcURL={'https://www.youtube.com/embed/K9ShlHKGRZc'}
        videoTitle={'Nathalie Jones'}
        width={'700'}
        height={'400'}
      />
      <Video
        videoSrcURL={'https://www.youtube.com/embed/K9ShlHKGRZc'}
        videoTitle={'Nathalie Jones'}
        width={'700'}
        height={'400'}
      />
      <Video
        videoSrcURL={'https://www.youtube.com/embed/K9ShlHKGRZc'}
        videoTitle={'Nathalie Jones'}
        width={'700'}
        height={'400'}
      />
    </VideoWrapper>
  </StyledWrapper>
);

export default MainDemoContent;
