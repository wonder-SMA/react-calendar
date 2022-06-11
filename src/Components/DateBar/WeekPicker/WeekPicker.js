import React from 'react';
import styled from 'styled-components';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

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
    font-size: 24px;
  }
`;

const WeekPicker = ({ month, year }) => {
  const setPrevMonthHandler = () => {

  };

  const setNextMonthHandler = () => {

  };

  return (
    <StyledWeekPicker>
      <Icon path={mdiChevronLeft} size="40px" color="#ff2d2d" onClick={setPrevMonthHandler} />
      <p>{month} {year}</p>
      <Icon path={mdiChevronRight} size="40px" color="#ff2d2d" onClick={setNextMonthHandler} />
    </StyledWeekPicker>
  );
};

export default WeekPicker;
