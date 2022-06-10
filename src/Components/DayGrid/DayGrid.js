import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import Hours from './Hours';

const StyledDayGrid = styled.div`
  max-height: 1536px;
  height: calc(98vh - 354px);
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const DayGrid = () => {
  return (
    <StyledDayGrid>
      <Hours />
      <Grid />
    </StyledDayGrid>
  );
};

export default DayGrid;
