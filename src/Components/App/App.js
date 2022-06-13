import React from 'react';
import styled from 'styled-components';

import DateBar from '../DateBar';
import DayGrid from '../DayGrid';
import Footer from '../Footer';
import Header from '../Header';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 1527px;
  height: 100vh;

  @media (min-width: 576px) {
    max-height: 1986px;
  }

  @media (min-width: 740px) {
    width: 740px;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <DateBar />
      <DayGrid />
      <Footer />
    </AppWrapper>
  );
};

export default App;
