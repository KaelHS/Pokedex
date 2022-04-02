import { AppProps } from 'next/app';
import { CustomThemeProvider } from '../contexts/CustomThemeContext';
import { FakeAuthProvider } from '../contexts/FakeAuthContext';
import { GlobalStyle } from '../styles/global';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../services/apollo';
import { PokemonProvider } from '../contexts/PokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <PokemonProvider>
        <FakeAuthProvider>
          <CustomThemeProvider>
            <Component {...pageProps} />
            <GlobalStyle />
          </CustomThemeProvider>
        </FakeAuthProvider>
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default MyApp
