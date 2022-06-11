import React from 'react';
import styled from 'styled-components';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

const StyledMonthPicker = styled.div`
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

const MonthPicker = ({ month, year }) => {
  return (
    <StyledMonthPicker>
      <Icon path={mdiChevronLeft} size="40px" color="#ff2d2d" />
      <p>{month} {year}</p>
      <Icon path={mdiChevronRight} size="40px" color="#ff2d2d" />
    </StyledMonthPicker>
  );
};

export default MonthPicker;
