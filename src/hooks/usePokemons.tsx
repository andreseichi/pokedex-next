import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

import { PokemonInterface } from '../types/pokemon';

interface PokemonsProviderProps {
  children: ReactNode;
}

interface PokemonsContextData {
  pokemonsList: PokemonInterface[];
}

const PokemonsContext = createContext<PokemonsContextData>(
  {} as PokemonsContextData
);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemonsList, setPokemonsList] = useState<PokemonInterface[]>([]);

  useEffect(() => {
    api.get('/pokemon?limit=100000&offset=0').then(({ data }) => {
      setPokemonsList(data.results);
    });
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemonsList }}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonsContext);

  return context;
}
