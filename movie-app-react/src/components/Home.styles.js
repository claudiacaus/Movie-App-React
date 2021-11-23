import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled.div`
  @media screen and (max-width: 700px) {
    img {
      max-width: 300px;
    }
  }
`;
