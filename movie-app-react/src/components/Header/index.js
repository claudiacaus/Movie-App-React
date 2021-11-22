import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={Logo} alt="Movie Time Logo" />
      </Link>

      <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
    </Content>
  </Wrapper>
);

export default Header;
