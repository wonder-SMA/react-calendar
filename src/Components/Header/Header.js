import React from 'react';
import styled from 'styled-components';

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
    width: 30px;
    height: 30px;
  }

  span:before,
  span:after {
    position: absolute;
    top: 13px;
    width: 100%;
    height: 4px;
    background-color: #ff2d2d;
    content: '';
  }

  span:after {
    transform: rotate(90deg);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <p>Interview Calendar</p>
      </div>
      <div>
        <span />
      </div>
    </StyledHeader>
  );
};

export default Header;
