import React, { ButtonHTMLAttributes } from 'react';
import logoImg from '../../assets/logo.svg';
import logoImgDark from '../../assets/logo-dark.svg';

import { ContentLogo } from './styles';

type LogoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  light?: boolean;
};

const Logo: React.FC<LogoProps> = ({ light }) => (
  <ContentLogo light={!!light}>
    <img src={light ? logoImg : logoImgDark} alt="DesafioIoasys" />
    <h1>Books</h1>
  </ContentLogo>
);

export default Logo;
