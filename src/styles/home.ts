import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: block;
  width: 65%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 0.75rem;
  }
`;
