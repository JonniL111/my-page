import styled from 'styled-components';
import * as vars from './vars';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 990px;
`;
export const Wrapper = styled.div`
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid ${vars.borderColor};
  margin: 15px;
  padding: 20px;
  overflow: hidden;
`;

export const BlockTitle = styled.h2`
  font-size: 18px;
  margin: 0 5px 10px 5px;
`;
