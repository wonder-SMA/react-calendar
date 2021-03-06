import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { getGrid } from '../../utils/functions';
import Cell from './Cell';
import { StoreContext } from '../../../index';

const StyledGrid = styled.ul`
  width: 644px;
  display: flex;
  flex-direction: column;

  & > li {
    &:not(&:last-child) {
      border-bottom: 2px solid #e7e7e7;
    }

    & > ul {
      display: flex;
      flex-wrap: nowrap;
    }
  }
`;

const Grid = observer(() => {
  const { store } = useContext(StoreContext);

  return (
    <StyledGrid>
      {getGrid(store.week, store.month, store.year).map((week, index) =>
        <li key={index}>
          <ul>
            {week.map((cellTimestamp, index) =>
              <Cell key={index} cellTimestamp={cellTimestamp} />
            )}
          </ul>
        </li>
      )}
    </StyledGrid>
  );
});

export default Grid;
