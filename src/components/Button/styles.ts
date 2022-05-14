import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.5rem;
  color: #fff;
  background-color: #ee6b2f;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.36px;
  text-align: center;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  display: block;
  white-space: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }

  img {
    width: 30px;
    height: 30px;
    color: white;
  }
`;
