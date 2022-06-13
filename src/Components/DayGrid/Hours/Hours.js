import React from 'react';
import styled from 'styled-components';

import { getHours } from '../../utils/functions';

const StyledHours = styled.ul`
  padding-top: 22px;

  li {
    width: 65px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 24px;
    font-weight: 500;
    color: #cfcfcf;
  }

  @media (min-width: 576px) {
    padding-top: 31px;

    li {
      width: 96px;
      height: 66px;
      font-size: 26px;
    }
  }

  @media (min-width: 644px) {
    li {
      width: 96px;
    }
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
