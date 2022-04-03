import { gql } from "@apollo/client";


export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_SELECTED = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      stats {
        base_stat
        stat {
          name
        }
      }
      species {
        url
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const GET_SPECIES = gql`
  query species {
    species {
      count
      next
      previous
      results {
        url
        name
      }
    }
  }
`;

export const GET_EVOLUTION_CHAIN = gql`
  query evolutionChain($id: String!) {
    evolutionChain(id: $id) {
      params
      status
      message
      response 

    }
  }
`;