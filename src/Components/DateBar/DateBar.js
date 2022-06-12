import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import WeekDay from './WeekDay';
import WeekPicker from './WeekPicker';
import { months, weekDays } from '../utils/consts';
import { StoreContext } from '../../index';

const StyledDateBar = styled.div`
  width: 100%;
  height: 146px;
  display: flex;
  padding-left: 65px;
  border-top: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  background-color: #f6f6f6;

  @media (min-width: 644px) {
    padding-left: 96px;
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

  return (
    <StyledDateBar>
      <div>
        <ul>
          {store.week.map((day, index) =>
            <WeekDay
              key={index}
              day={weekDays[index]}
              date={day[weekDays[index]]}
              isCurrent={day[weekDays[index]] === new Date().getDate()
                && store.month === months[new Date().getMonth()]
                && store.year === new Date().getFullYear()}
            />
          )}
        </ul>
        <WeekPicker />
      </div>
    </StyledDateBar>
  );
});

export default DateBar;
