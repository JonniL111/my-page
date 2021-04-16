import React from 'react';
import styled from 'styled-components';

const Header = styled.div``;
const HeaderName = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;
const HeaderPhone = styled.a`
  font-style: 12px;
  color: #777;
  text-decoration: none;
`;

function Phone() {
  return (
    <Header>
      <HeaderName>Евгений Лихолат</HeaderName>
      <HeaderPhone href="tel:+79219310232">+7 (921) 931-02-32</HeaderPhone>
    </Header>
  );
}

export default Phone;
