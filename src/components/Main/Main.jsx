import React from 'react';
import styled from 'styled-components';

import * as vars from '../../assets/vars';
import * as global from '../../assets/global-style';

import { Phone } from './components';
import { data } from '../../dataBase/db';

const MainBlock = styled.div`
  width: 100%;
`;
const Wrapper = styled(global.Wrapper)``;
const WrapperPhone = styled(global.Wrapper)`
  @media (max-width: 575px) {
    display: none;
  }
`;

const Information = styled.div``;
const InformationRow = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  gap: 15px;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;
const InformationTitle = styled.div`
  padding-top: 10px;
  color: ${vars.grey};
  font-size: 12px;
`;
const InformationDescription = styled.div`
  div{
    font-weight: 700;
  }
  @media (max-width: 767px) {
    border-bottom: 1px solid ${vars.borderColor};
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;
const BlockTitle = styled(global.BlockTitle)``;

function Main() {
  const map = (data) => {
    return data.map((item, idx) => (
      <InformationRow key={idx}>
        <InformationTitle>{item.years}</InformationTitle>
        <InformationDescription>
          <div>{item.title}</div>
          <span>{item.description}</span>
        </InformationDescription>
      </InformationRow>
    ));
  };
  const education = map(data.education);
  const works = map(data.works);
  return (
    <MainBlock>
      <WrapperPhone>
        <Phone />
      </WrapperPhone>
      <Wrapper>
        <BlockTitle>Образование:</BlockTitle>
        <Information>{education}</Information>
      </Wrapper>

      <Wrapper>
        <BlockTitle>Опыт работы:</BlockTitle>
        <Information>{works}</Information>
      </Wrapper>
    </MainBlock>
  );
}

export default Main;
