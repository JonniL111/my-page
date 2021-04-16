import React from 'react';
import styled from 'styled-components';

import * as vars from '../../../assets/vars';

const CounterBlock = styled.div`
  margin: 0 auto;
  width: 130px;
  height: 30px;
  border: 1px solid #000;
  padding: 3px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  background: rgb(237, 238, 240);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 238, 240, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const BlockElem = styled.div`
  display: inline-block;
  width: 30px;
  height: 100%;
  & + & {
    border-left: 1px solid #000;
  }
`;

function Counter({ qount = 12 }) {
  const number = [...qount.toString()];
  const qounter = Array(4).fill(0);
  number.reverse().forEach((item, idx) => (qounter[idx] = item));
  const newQounter = qounter.reverse().map((item, idx) => <BlockElem key={idx}>{item}</BlockElem>);

  return <CounterBlock>{newQounter}</CounterBlock>;
}

export default Counter;
