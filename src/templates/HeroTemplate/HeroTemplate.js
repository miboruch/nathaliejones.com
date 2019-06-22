import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainContent from 'components/MainContent/MainContent';
import Info from 'components/Info/Info';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  width: 95%;
  margin: auto;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 50px;

  ${({ theme }) => theme.mq.desktop}{
    width: 40%;
  }

`;

const StyledButton = styled(Button)`
  margin: .5em 0;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop}{
    width: 100%;
  }
`;

const HeroTemplate = ({ image }) => (
  <StyledWrapper>
    <ButtonWrapper>
      <StyledButton
        as="a"
        href="/documents/Acting.pdf"
        download="Acting Package">
        DOWNLOAD ACTING PORTFOLIO
      </StyledButton>
      <StyledButton
        as="a"
        href="assets/documents/Modeling.pdf"
        download="Headshots and resume">
        DOWNLOAD HEADSHOTS AND RESUME
      </StyledButton>
    </ButtonWrapper>
    <MainContent image={image} />
    <Info />
  </StyledWrapper>
);

HeroTemplate.propTypes = {
  image: PropTypes.node.isRequired,
};

export default HeroTemplate;
