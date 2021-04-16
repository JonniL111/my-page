import React, { useEffect, useState } from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styled from 'styled-components';

import * as global from './assets/global-style';
import { Footer } from './components/Footer';
import { getIp, setQount } from './request';

const Container = styled(global.Container)``;

const MainWrapper = styled.div`
  display: flex;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

function App() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    getIp()
      .then((ip) => {
        const time = Math.floor(new Date().getTime() / 1000 / 60);
        return { ip, time };
      })
      .then((obj) => {
        setQount(obj).then((resp) => setUser(resp.data));
      });
  }, []);
  

  return (
    <>
      <Header qount={user} />
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
