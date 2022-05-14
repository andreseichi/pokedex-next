import type { NextPage } from 'next';

import { PokemonList } from '../components/PokemonList';

import { Container, Content } from '../styles/home';

const Home: NextPage = () => {
  return (
    <Container>
      <Content>
        <PokemonList />
      </Content>
    </Container>
  );
};

export default Home;
