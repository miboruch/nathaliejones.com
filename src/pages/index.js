import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.raleway};
`;

const StyledParahraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.raleway};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const IndexPage = () => (
  <MainTemplate>
    <StyledHeading>Hello world, hello Nathalie Jones!</StyledHeading>
    <StyledParahraph>siemano</StyledParahraph>
  </MainTemplate>
);

export default IndexPage;
