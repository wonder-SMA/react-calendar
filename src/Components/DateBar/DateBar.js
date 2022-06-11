import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import WeekDay from './WeekDay';
import WeekPicker from './WeekPicker';
import { getCurrentDay } from '../utils/functions';
import { months, weekDays } from '../utils/consts';
import { StoreContext } from '../../index';

const StyledDateBar = styled.div`
  width: 100%;
  height: 146px;
  display: flex;
  border-top: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  background-color: #f6f6f6;

  @media (min-width: 644px) {
    justify-content: flex-end;

    ul {
      justify-content: flex-end;
    }
  }

  & > div {
    width: 644px;
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      margin-top: 12px;
    }

    p {
      font-weight: 600;
    }
  }
`;

const DateBar = observer(() => {
  const { store } = useContext(StoreContext);

  useEffect(() => {
  }, []);

  return (
    <StyledDateBar>
      <div>
        <ul>
          {weekDays.map((day, index) =>
            <WeekDay
              key={index}
              day={day}
              date={store.week[index][day]}
              isCurrent={store.week[index][day] === getCurrentDay()}
            />
          )}
        </ul>
        <WeekPicker month={months[store.month][1]} year={store.year} />
      </div>
    </StyledDateBar>
  );
});

export default DateBar;
