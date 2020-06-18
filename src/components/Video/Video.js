import React from 'react';
import { StyledVideo } from './Video.styles';

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
