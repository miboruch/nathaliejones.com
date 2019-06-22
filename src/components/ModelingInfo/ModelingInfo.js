import React from 'react';
import styled from 'styled-components';

const information = [
  {
    description:
      "Nathalie Jones is an international model and actress. She started her journey with modeling at the age of 15 in Poland. Since then she successfully worked both in Commercial and Print. During her studies in The Crakow School of Art, she collaborated with two majors Beauty Academy Artystyczna Alternatywa and Face Art. She completed editorial for Bella Gladys magazine in co-operation with fashion designer and photographer from Poland. At the age of 22, she moved to London to pursue her career. Her stay there resulted in a 2 magazine covers for the 'She magazine'. Currently, she lives in Los Angeles, California.",
  },
];

const StyledWrapper = styled.div`
  margin: auto;
`;

const InfoWrapper = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 2em 0;
`;


const StyledDescription = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
`;

const Info = () => (
  <StyledWrapper>
    {information.map(({description}) => (
      <InfoWrapper>
        <StyledDescription>{description}</StyledDescription>
      </InfoWrapper>
    ))}
  </StyledWrapper>
);

export default Info;
