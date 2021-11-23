import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const ChildrenContent = styled.div`
  display: flex;
  align-items: center;

  .login {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    .login {
      margin-left: 80px;
      font-size: 0.9rem;
    }
  }
`;

export const TMDBLogoImg = styled.img`
  width: 60px;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    width: 40px;
    margin-left: 7px;
  }
`;
