import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainContent from 'components/MainContent/MainContent';
import Info from 'components/Info/Info';

const StyledWrapper = styled.div`
  width: 95%;
  margin: auto;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const HeroTemplate = ({ image }) => (
  <StyledWrapper>
    <MainContent image = {image}/>
    <Info />
  </StyledWrapper>
);

HeroTemplate.propTypes = {
  image: PropTypes.node.isRequired,
};

export default HeroTemplate;
