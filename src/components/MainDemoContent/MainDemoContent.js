import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Video from '../Video/Video';
import { demoArray } from '../../../utils/helpers';

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
      {demoArray.map((demoUrl, index) => (
        <Video
          videoSrcURL={demoUrl}
          videoTitle={'Nathalie Jones'}
          width={'700'}
          height={'400'}
          key={index}
        />
      ))}
    </VideoWrapper>
  </StyledWrapper>
);

export default MainDemoContent;
