import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const information = [
  {
    title: 'About',
    description: "Nathalie Jones is an international model and actress. She started her journey with modeling at the age of 15 in Poland. Since then she successfully worked both in Commercial and Print. During her studies in The Crakow School of Art, she collaborated with two majors Beauty Academy Artystyczna Alternatywa and Face Art. She completed editorial for Bella Gladys magazine in co-operation with fashion designer and photographer from Poland. In the age of 22, she moved to London to pursue her career. Her stay there resulted in a 2 magazine covers for the 'She magazine'. Currently, she lives in Los Angeles, California. "
  }
]

const StyledWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const InfoWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.size.small};
  padding-bottom: 2em;
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-family: ${({ theme }) => theme.font.family.advent};
`;

const StyledDescription = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 1px;
  line-height: 1.5;
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-family: ${({ theme }) => theme.font.family.advent};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 5em;

  ${({ theme }) => theme.mq.tablet} {
    width: 250px;
  }
`;

const Info = () => (
  <StyledWrapper>
    {
      information.map(({title, description}) => (
        <InfoWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </InfoWrapper>
      ))}
      <StyledHeading>Download</StyledHeading>
      <ButtonWrapper>
        <StyledButton
          as="a"
          href="../../assets/images/natalia1.png" 
          download='photo'>download portfolio
        </StyledButton>
      </ButtonWrapper>
  </StyledWrapper>
);

export default Info;