import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as vars from '../../assets/vars';
import * as global from '../../assets/global-style';
import Counter from './components/Counter';

const HeaderBlock = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid ${vars.borderColor};
`;

const Container = styled(global.Container)`
  text-align: center;
`;

function Header({ qount }) {
  return (
    <HeaderBlock>
      <Container>
        <Counter qount={qount} />
      </Container>
    </HeaderBlock>
  );
}

export default Header;
