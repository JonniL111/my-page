import React from 'react';
import styled from 'styled-components';

import * as vars from '../../assets/vars';

const FooterBlock = styled.footer`
  background-color: #fff;
  border-top: 1px solid ${vars.borderColor};
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

function Footer() {
  return <FooterBlock>2021</FooterBlock>;
}

export default Footer;
