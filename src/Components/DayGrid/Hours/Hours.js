import React from 'react';
import styled from 'styled-components';

import { getHours } from '../../utils/functions';

const StyledHours = styled.ul`
  width: 96px;
  padding-top: 33px;

  li {
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 26px;
    font-weight: 500;
    color: #cfcfcf;
  }
`;

const Hours = () => {
  return (
    <StyledHours>
      {getHours().map((hour, index) =>
        <li key={index}>{hour}</li>
      )}
    </StyledHours>
  );
};

export default Hours;
