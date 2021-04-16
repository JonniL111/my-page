import React from 'react';
import styled from 'styled-components';

import * as vars from '../../assets/vars';
import * as global from '../../assets/global-style';

import { Phone } from './components';

const MainBlock = styled.div`
  width: 100%;
`;
const Wrapper = styled(global.Wrapper)``;
const WrapperPhone = styled(global.Wrapper)`
  @media (max-width: 575px){
    display: none;
  }
`;

const Information = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  gap: 15px;
  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;
const InformationTitle = styled.div`
  color: ${vars.grey};
  font-size: 12px;
`;
const InformationDescription = styled.div`
  @media (max-width: 767px) {
    border-bottom: 1px solid ${vars.borderColor};
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;
const BlockTitle = styled(global.BlockTitle)``;

function Main() {
  return (
    <MainBlock>
      <WrapperPhone>
        <Phone/>
      </WrapperPhone>
      <Wrapper>
        <BlockTitle>Образование:</BlockTitle>
        <Information>
          <InformationTitle>1</InformationTitle>
          <InformationDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi labore ex eum
            reprehenderit porro sequi voluptas animi neque et distinctio tempora veritatis vel, quia
            veniam inventore quos. Maiores, corrupti fuga.
          </InformationDescription>
          <InformationTitle>3</InformationTitle>
          <InformationDescription>4</InformationDescription>
          <InformationTitle>5</InformationTitle>
        </Information>
      </Wrapper>

      <Wrapper>
        <BlockTitle>Опыт работы:</BlockTitle>
        <Information>
          <InformationTitle>1</InformationTitle>
          <InformationDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi labore ex eum
            reprehenderit porro sequi voluptas animi neque et distinctio tempora veritatis vel, quia
            veniam inventore quos. Maiores, corrupti fuga.
          </InformationDescription>
          <InformationTitle>3</InformationTitle>
          <InformationDescription>4</InformationDescription>
          <InformationTitle>5</InformationTitle>
        </Information>
      </Wrapper>
    </MainBlock>
  );
}

export default Main;
