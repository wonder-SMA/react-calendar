import React from 'react';
import styled, { css } from 'styled-components';

const StyledEvent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ecedff;
  cursor: pointer;

  ${props => props?.isSelected && css`
    background-color: #b4b8ff;
  `}
`;

const Event = ({ isSelected }) => {
  return (
    <StyledEvent isSelected={isSelected} />
  );
};

export default Event;
