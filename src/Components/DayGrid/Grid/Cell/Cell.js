import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Event from './Event';
import { StoreContext } from '../../../../index';

const StyledCell = styled.li`
  width: 92px;
  height: 66px;
  padding: 2px;

  &:not(&:first-child) {
    border-left: 2px solid #e7e7e7;
  }
`;

const Cell = observer(({ cellTimestamp }) => {
  const { store } = useContext(StoreContext);
  const [isEvent, setIsEvent] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (store.events.length) {
      store.events.forEach(event => {
        if (cellTimestamp <= event && event < cellTimestamp + 3600000) {
          return setIsEvent(true);
        }
      });
    }
    if (!store.events.includes(cellTimestamp)) {
      setIsSelected(false);
      setIsEvent(false);
    }
  }, [cellTimestamp, store.events]);

  const selectHandler = () => {
    if (isEvent) {
      setIsSelected(!isSelected);
      store.setSelectedEvents(cellTimestamp);
    }
  };

  return (
    <StyledCell onClick={selectHandler}>
      {isEvent && <Event isSelected={isSelected} />}
    </StyledCell>
  );
});

export default Cell;
