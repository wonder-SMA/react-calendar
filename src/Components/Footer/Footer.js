import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../index';

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  background-color: #f6f6f6;
  border-top: 2px solid #ececec;

  p {
    font-size: 26px;
    font-weight: 500;
    color: #ff2d2d;
    cursor: pointer;
  }
`;

const Footer = observer(() => {
  const { store } = useContext(StoreContext);

  const removeEventsHandler = () => {
    store.removeSelectedEvents();
  };

  return (
    <StyledFooter>
      <p>Today</p>
      <p onClick={removeEventsHandler}>
        {store.selectedEvents.length ? 'Delete' : ''}
      </p>
    </StyledFooter>
  );
});

export default Footer;
