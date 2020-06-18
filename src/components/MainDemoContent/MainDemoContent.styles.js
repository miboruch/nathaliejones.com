import styled from 'styled-components';

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

export { StyledWrapper, ButtonWrapper, VideoWrapper };
