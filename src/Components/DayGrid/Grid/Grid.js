import React from 'react';
import styled from 'styled-components';

import { getGrid } from '../../utils/functions';

const StyledGrid = styled.ul`
  display: flex;
  flex-direction: column;

  & > li {
    &:not(&:last-child) {
      border-bottom: 2px solid #e7e7e7;
    }

    & > ul {
      display: flex;
      flex-wrap: nowrap;

      li {
        width: 92px;
        height: 66px;

        &:not(&:first-child) {
          border-left: 2px solid #e7e7e7;
        }
      }
    }
  }
`;

const Grid = () => {
  return (
    <StyledGrid>
      {getGrid().map((week, index) =>
        <li key={index}>
          <ul>
            {week.map((day) =>
              <li key={day}></li>
            )}
          </ul>
        </li>
      )}
    </StyledGrid>
  );
};

export default Grid;
