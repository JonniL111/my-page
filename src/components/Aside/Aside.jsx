import React from 'react';
import styled from 'styled-components';
import myPhoto from '../../assets/images/i.jpg';

import * as global from '../../assets/global-style';
import { Phone } from '../Main/components';

const AsideBlock = styled.aside`
  width: 100%;
  max-width: 270px;
  @media (max-width: 767px) {
    max-width: 240px;
  }
  @media (max-width: 575px) {
    max-width: 100%;
    position: relative;
  }
`;

const Photo = styled.div`
  text-align: center;
  overflow: hidden;
  img {
    min-width: 100%;
    min-height: 100%;
    text-align: center;
  }
  @media (max-width: 575px) {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const Wrapper = styled(global.Wrapper)``;

const WrapperPhoto = styled(global.Wrapper)`
  @media (max-width: 575px) {
    width: 80px;
    height: 80px;
    padding: 5px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const WrapperPhone = styled(global.Wrapper)`
  @media (min-width: 576px){
    display: none;
  }
  @media (max-width: 575px) {
    margin-left: 100px;
  }
`;

const Skils = styled.ul``;
const Skil = styled.li``;
const SkilTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  width: 100%;
`;
const SkilContent = styled(SkilTitle)`
  font-size: 14px;
  font-weight: 500;
`;

function Aside() {
  return (
    <AsideBlock>
      <WrapperPhoto>
        <Photo>
          <img src={myPhoto} alt="i" />
        </Photo>
      </WrapperPhoto>

      <WrapperPhone>
        <Phone />
      </WrapperPhone>

      <Wrapper>
        <Skils>
          <Skil>
            <SkilTitle>Название</SkilTitle>
            <SkilContent>Кнотент</SkilContent>
          </Skil>
        </Skils>
      </Wrapper>
    </AsideBlock>
  );
}

export default Aside;
