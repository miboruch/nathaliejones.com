import React from 'react';
import Button from '../Button/Button';
import Video from '../Video/Video';
import { demoArray } from '../../../utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import {
  StyledWrapper,
  ButtonWrapper,
  VideoWrapper
} from './MainDemoContent.styles';

const MainDemoContent = () => {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "pdf" }, name: { ne: "Modeling Package" } }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      <ButtonWrapper>
        {edges.map((file, index) => (
          <a href={file.node.publicURL} download={file.node.name} key={index}>
            <Button>DOWNLOAD {file.node.name}</Button>
          </a>
        ))}
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
};

export default MainDemoContent;
