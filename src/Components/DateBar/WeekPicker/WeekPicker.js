import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

import { StoreContext } from '../../../index';

const StyledWeekPicker = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 26px;

  svg {
    width: 92px;
    cursor: pointer;
  }

  p {
    text-align: center;
    font-size: 22px;
  }

  @media (min-width: 576px) {
    p {
      font-size: 24px;
    }
  }
`;

const WeekPicker = observer(() => {
  const { store } = useContext(StoreContext);

  const setPrevWeekHandler = () => {
    store.setWeek('prev');
  };

  const setNextWeekHandler = () => {
    store.setWeek('next');
  };

  return (
    <StyledWeekPicker>
      <Icon path={mdiChevronLeft} size="40px" color="#ff2d2d" onClick={setPrevWeekHandler} />
      <p>{store.month} {store.year}</p>
      <Icon path={mdiChevronRight} size="40px" color="#ff2d2d" onClick={setNextWeekHandler} />
    </StyledWeekPicker>
  );
});

export default WeekPicker;
