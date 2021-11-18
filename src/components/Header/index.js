import React from 'react';

import Logo from '../../images/movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={Logo} alt="React Movie Logo" />
      <TMDBLogoImg src={TMDBLogo} alt="TMDb Logo" />
    </Content>
  </Wrapper>
);

export default Header;
