import React from 'react';
import styled, { css } from 'styled-components';

const StyledWeekDay = styled.li`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p:first-child {
    font-weight: 700;
  }

  p:last-child {
    font-size: 26px;

    ${props => props?.isCurrent && css`
      position: relative;
      top: 8px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
      background-color: #ff2d2d;
    `}
  }
`;

const WeekDay = ({ day, date, isCurrent }) => {
  return (
    <StyledWeekDay isCurrent={isCurrent}>
      <p>{day[0]}</p>
      <p>{date}</p>
    </StyledWeekDay>
  );
};

export default WeekDay;
