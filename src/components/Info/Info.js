import React from 'react';
import styled from 'styled-components';

const information = [
  {
    title: 'About',
    description:
      "Nathalie Jones is an international actress. Was born on January 28, 1995 in Tarnow, Malopolskie, Poland.  She attended The Crakow School of Art. During her first year of acting education she already got involved in theatre and TV show productions.  After Establishing her Business and Management Skills in London Nathalie decided to follow her passion for acting and moved to Los Angeles. Since then she has worked in numerous productions including Film, New Media, Commercial and Print. She also enjoys writing and producing proprietary content.",
  },
];

const StyledWrapper = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 1em;
  padding-bottom: 3em;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 2em 0;
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.textColor};
`;

const StyledDescription = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 1px;
  line-height: 1.5;
`;

const Info = () => (
  <StyledWrapper>
    {information.map(({ title, description }) => (
      <InfoWrapper key={title}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </InfoWrapper>
    ))}
  </StyledWrapper>
);

export default Info;
