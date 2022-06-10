import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import WeekDay from './WeekDay';
import MonthPicker from './MonthPicker';
import { currentDate, getCurrentMonth, getCurrentWeek, getCurrentYear } from '../utils/functions';
import { months, weekDays } from '../utils/consts';

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

const DateBar = () => {
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  useEffect(() => {
  }, []);

  return (
    <StyledDateBar>
      <div>
        <ul>
          {weekDays.map((day, index) =>
            <WeekDay key={index} day={day} date={currentWeek[day]} isCurrent={currentWeek[day] === currentDate[2]} />
          )}
        </ul>
        <MonthPicker month={months[currentMonth]} year={currentYear} />
      </div>
    </StyledDateBar>
  );
};

export default DateBar;
