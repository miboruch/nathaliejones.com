import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Video from '../Video/Video';
import { demoArray } from '../../../utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';

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
