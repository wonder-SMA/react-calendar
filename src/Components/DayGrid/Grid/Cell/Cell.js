import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Cell = ({ cellTimestamp, events }) => {
  const { store } = useContext(StoreContext);
  const [isEvent, setIsEvent] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (events.length) {
      events.forEach(event => {
        if (cellTimestamp <= event && event < cellTimestamp + 3600000) {
          return setIsEvent(true);
        }
      });
    }
    if (!events.includes(cellTimestamp)) {
      setIsSelected(false);
      setIsEvent(false);
    }
  }, [cellTimestamp, events]);

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
};

export default Cell;
