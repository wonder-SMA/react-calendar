import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../index';

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7vw;
  background-color: #f6f6f6;
  border-top: 2px solid #ececec;

  p {
    font-size: 24px;
    font-weight: 500;
    color: #ff2d2d;
    cursor: pointer;
  }

  @media (min-width: 576px) {
    height: 80px;
    padding: 0 50px;

    p {
      font-size: 26px;
    }
  }
`;

const Footer = observer(() => {
  const { store } = useContext(StoreContext);

  const setTodayHeader = () => {
    store.setToday();
  };

  const removeEventsHandler = () => {
    const amount = store.selectedEvents.length;
    setTimeout(() => alert(`The ${amount} events have been removed`), 500);
    store.removeSelectedEvents();
  };

  return (
    <StyledFooter>
      <p onClick={setTodayHeader}>Today</p>
      <p onClick={removeEventsHandler}>
        {store.selectedEvents.length ? 'Delete' : ''}
      </p>
    </StyledFooter>
  );
});

export default Footer;
