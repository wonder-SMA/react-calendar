import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import WeekDay from './WeekDay';
import MonthPicker from './MonthPicker';
import { currentDate, getMonth, getYear } from '../utils/functions';
import { months, weekDays } from '../utils/consts';
import { StoreContext } from '../../index';

const StyledDateBar = styled.div`
  width: 100%;
  height: 146px;
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  background-color: #f6f6f6;

  & > div {
    width: 644px;
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-wrap: nowrap;
      margin-top: 12px;
    }

    p {
      font-weight: 600;
    }
  }
`;

const DateBar = observer(() => {
  const { store } = useContext(StoreContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentYear, setCurrentYear] = useState(getYear());

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
              isCurrent={store.week[index][day] === +currentDate[2]}
            />
          )}
        </ul>
        <MonthPicker month={months[currentMonth][1]} year={currentYear} />
      </div>
    </StyledDateBar>
  );
});

export default DateBar;
