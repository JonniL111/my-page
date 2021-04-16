import React, { useCallback, useEffect } from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styled from 'styled-components';

import * as global from './assets/global-style';
import { Footer } from './components/Footer';
import { getQount, setQount } from './request';

const Container = styled(global.Container)``;

const MainWrapper = styled.div`
  display: flex;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

function App() {
  

  const onClick =useCallback( (e) => {
    setQount(3).then((resp) => console.log(resp));
  },[]);

  return (
    <>
      <Header />
      <button onClick={(e) => onClick(e)}>dsf</button>
      <Container>
        <MainWrapper>
          <Aside />
          <Main />
        </MainWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default App;
