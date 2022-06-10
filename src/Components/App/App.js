import React from 'react';
import styled from 'styled-components';

import DateBar from '../DateBar';
import DayGrid from '../DayGrid';
import Footer from '../Footer';
import Header from '../Header';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 1890px;
  height: 98vh;
  
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
