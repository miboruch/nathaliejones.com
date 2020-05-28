import React from 'react';
import styled from 'styled-components';

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

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <StyledVideo
    src={videoSrcURL}
    title={videoTitle}
    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    frameBorder='0'
    webkitallowfullscreen='true'
    mozallowfullscreen='true'
    allowFullScreen
    {...props}
  />
);
export default Video;
