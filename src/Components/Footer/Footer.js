import React from 'react';
import styled from 'styled-components';

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
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Today</p>
      <p>Delete</p>
    </StyledFooter>
  );
};

export default Footer;
