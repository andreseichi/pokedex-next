import { FormEvent, useEffect, useState } from 'react';

import { PokemonCard } from '../PokemonCard';

import { Button } from '../Button';

import { api } from '../../services/api';

import { usePokemons } from '../../hooks/usePokemons';

import {
  Container,
  Header,
  Title,
  Form,
  FormContainer,
  Input,
  Content,
  SearchIcon,
  ReloadIcon,
  StyledButton,
} from './styles';

import { PokemonInterface } from '../../types/pokemon';

interface PokemonListData {
  next: string | null;
  previous: string | null;
  results: PokemonInterface[];
}

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState({} as PokemonListData);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonInterface[]>(
    []
  );
  const [query, setQuery] = useState('');

  const { pokemonsList } = usePokemons();

  useEffect(() => getPokemons, []);

  function getPokemons() {
    api.get('/pokemon').then(({ data }) => {
      setPokemonList(data);
      setPokemons(data.results);
      setQuery('');
    });
  }

  useEffect(() => {
    const filteredPeople =
      query === ''
        ? pokemonsList
        : pokemonsList.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(query.toLowerCase());
          });

    setFilteredPokemons(filteredPeople);
  }, [query, pokemonsList]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setPokemons(filteredPokemons);
  }

  function handleLoadMorePokemons() {
    const url = pokemonList.next;
    const newUrl = url?.split('https://pokeapi.co/api/v2').join('');

    api.get(`${newUrl}`).then(({ data }) => {
      setPokemonList(data);

      const newPokemons = [...pokemons];
      newPokemons.push(...data.results);
      setPokemons(newPokemons);
    });
  }

  return (
    <Container>
      <Header>
        <Title>Pokédex</Title>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={(event) => setQuery(event.target.value)}
              value={query}
            />
            <StyledButton type="submit">
              <SearchIcon />
            </StyledButton>
          </Form>

          <StyledButton onClick={getPokemons}>
            <ReloadIcon />
          </StyledButton>
        </FormContainer>
      </Header>

      <Content>
        {pokemons?.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            url={pokemon.url}
            key={pokemon.name}
          />
        ))}
      </Content>
      {pokemonList.next && query === '' ? (
        <Button onClick={handleLoadMorePokemons}>Load More Pokemons</Button>
      ) : (
        ''
      )}
    </Container>
  );
}
