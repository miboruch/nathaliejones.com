import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.grey};
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font.size.large};
`;

const HeroTemplate = () => (
  <StyledWrapper>
    <StyledHeading>Hello</StyledHeading>
  </StyledWrapper>
);

export default HeroTemplate;