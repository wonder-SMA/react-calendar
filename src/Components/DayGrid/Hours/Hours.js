import React from 'react';
import styled from 'styled-components';

import { getHours } from '../../utils/functions';

const StyledHours = styled.ul`
  padding-top: 24px;

  li {
    width: 65px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    color: #cfcfcf;
  }

  @media (min-width: 576px) {
    padding-top: 33px;

    li {
      width: 96px;
      height: 68px;
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
