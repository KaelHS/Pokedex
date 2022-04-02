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
      sprites {
        front_default
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

export const GET_EVOLUTION_CHAIN = gql`
  query evolutionChain($id: String!) {
    evolutionChain(id: $id) {
      params
      status
      message
      response {
        chain {
          evolves_to {
            evolves_to {
              species {
                name
                url
              }
            }
          }
          species {
            name
            url
          }
        }
      }
    }
  }
`;