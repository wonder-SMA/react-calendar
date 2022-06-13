import React, { useContext } from 'react';
import styled from 'styled-components';

import { StoreContext } from '../../index';

const StyledHeader = styled.div`
  width: 100%;
  height: 118px;
  padding: 0 7vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 28px
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
    width: 25px;
    height: 4px;
    background-color: #ff2d2d;
    content: '';
  }

  span:after {
    transform: rotate(90deg);
  }

  @media (min-width: 576px) {
    height: 128px;
    padding: 0 50px;

    p {
      font-size: 40px
    }

    span:before,
    span:after {
      width: 30px;
    }
  }
`;

const Header = () => {
  const { store } = useContext(StoreContext);

  const addEventHandler = () => {
    const reg = /\d{4}-\d{1,2}-\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}/;
    const event = prompt('Enter event time: YYYY-MM-DD hh:mm:ss');
    if (reg.test(event)) {
      const arr = event.split(' ');
      store.setEvent(Date.parse(`${arr[0]}T${arr[1]}`));
    } else {
      (event || event === '') && alert('Wrong user input');
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
