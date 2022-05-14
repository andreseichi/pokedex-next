import type { AppProps } from 'next/app';

import { PokemonsProvider } from '../hooks/usePokemons';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <GlobalStyle />

      <Component {...pageProps} />
    </PokemonsProvider>
  );
}

export default MyApp;
