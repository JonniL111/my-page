import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getQount, setQount } from '../../request';

import * as vars from '../../assets/vars';
import * as global from '../../assets/global-style';

const HeaderBlock = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid ${vars.borderColor};
`;

const Container = styled(global.Container)`
  text-align: center;
`;

function Header() {
  const [state, setstate] = useState();

  useEffect(() => {
    getQount().then((resp) => setstate(resp));
  }, []);

  return (
    <HeaderBlock>
      <Container>
        <div className="counter">Спидометр</div>
      </Container>
    </HeaderBlock>
  );
}

export default Header;
