import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import Grid from './Grid';
import Hours from './Hours';
import { StoreContext } from '../../index';

const StyledDayGrid = styled.div`
  max-height: 1536px;
  height: calc(98vh - 354px);
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  ${props => props?.isEndWeek && css`
    justify-content: space-between;
  `}
`;

const DayGrid = observer(() => {
  const { store } = useContext(StoreContext);

  return (
    <StyledDayGrid isEndWeek={!Object.values(store.week[1])[0]}>
      <Hours />
      <Grid />
    </StyledDayGrid>
  );
});

export default DayGrid;
