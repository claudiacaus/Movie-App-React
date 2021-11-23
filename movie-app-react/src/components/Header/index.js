import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {
  Wrapper,
  Content,
  LogoImg,
  ChildrenContent,
  TMDBLogoImg,
} from './Header.styles';
// Context
import { Context } from '../../context';

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="movie-logo" />
        </Link>
        <ChildrenContent>
          {user ? (
            <span className="login">Logged in as: {user.username}</span>
          ) : (
            <Link to="/login">
              <span className="login">Log in</span>
            </Link>
          )}
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </ChildrenContent>
      </Content>
    </Wrapper>
  );
};

export default Header;
