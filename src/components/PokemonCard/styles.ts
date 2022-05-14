import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 23.4375%;

  margin: 0 0.78125% 50px;

  float: left;
  cursor: pointer;

  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
    transform: translateY(-1rem);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 5rem;
  min-height: 5rem;

  position: relative;
`;

export const Sprite = styled.img`
  width: 100%;
  height: 100%;
  display: block;

  border-radius: 5px;

  background-color: #f2f2f2;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 7.2525%;
  width: 100%;

  .id {
    color: #919191;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    margin: 0.5em 0;
    padding-top: 2px;

    @media screen and (max-width: 768px) {
      font-size: 0.6125rem;
    }
  }

  .types {
    display: flex;
    width: 100%;
  }
`;

export const LoadingIcon = styled.img`
  width: 50%;
  height: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  color: #313131;
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

interface TypeSpanProps {
  type: string;
}

export const TypeSpan = styled.span<TypeSpanProps>`
  background: ${({ type }) => `var(--${type})`};
  color: #fff;
  border-radius: 3px;
  width: 38.4375%;
  line-height: 18px;
  margin: 0 1.5625% 0 0;
  float: left;
  font-size: 0.6875rem;
  text-align: center;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 0.5875rem;
  }
`;
