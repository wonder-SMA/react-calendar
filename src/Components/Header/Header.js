import React, { useContext } from 'react';
import styled from 'styled-components';

import { StoreContext } from '../../index';

const StyledHeader = styled.div`
  width: 100%;
  height: 128px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 40px
  }

  div:last-child {
    position: relative;
    right: -10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  span:before,
  span:after {
    position: absolute;
    top: 23px;
    right: 10px;
    width: 30px;
    height: 4px;
    background-color: #ff2d2d;
    content: '';
  }

  span:after {
    transform: rotate(90deg);
  }
`;

const Header = () => {
  const { store } = useContext(StoreContext);

  const addEventHandler = () => {
    const event = prompt('Enter event time: YYYY-MM-DD hh:mm:ss')?.split(' ');
    if (event.length === 2) {
      store.setEvent(Date.parse(`${event[0]}T${event[1]}`));
    } else {
      alert('Wrong user input');
    }
  };

  return (
    <StyledHeader>
      <div>
        <p>Interview Calendar</p>
      </div>
      <div onClick={addEventHandler}>
        <span />
      </div>
    </StyledHeader>
  );
};

export default Header;
