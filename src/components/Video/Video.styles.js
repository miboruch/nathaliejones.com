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

  ${({ theme }) => theme.mq.tablet} {
    height: 600px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 800px;
  }
`;

export { StyledVideo };
