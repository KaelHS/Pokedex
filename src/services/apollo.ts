import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    // uri: 'https://graphql-pokeapi.graphcdn.app/',
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
        uri: 'https://graphql-pokeapi.graphcdn.app/',
    }),
})