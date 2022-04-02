import { createContext, useState, useEffect, useContext } from 'react';
import { gql, useQuery,  } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/queries';
interface IPokemonContextData {
    data: { pokemons: IResponseData };
    loading: boolean;
    error: any;
    fetchMore: any;
    selectedPokemon: IPokemonListItem | undefined;
    setSelectedPokemon: React.Dispatch<React.SetStateAction<any>>;
}

interface IPokemonProviderProps {
    children: React.ReactNode;
}

interface IPokemonListItem {
    url: string;
    name: string;
    image: string;
  }
  
  interface IResponseData {
    count: number;
    message: string;
    next: string | null;
    previous: string | null;
    results: IPokemonListItem[] ;
    status: boolean;
  }
  


export const PokemonContext = createContext<IPokemonContextData>({} as IPokemonContextData);

export const PokemonProvider = ({ children }: IPokemonProviderProps) => {
    
    const [ selectedPokemon, setSelectedPokemon ] = useState<IPokemonListItem>();
    const { data, loading, error, fetchMore } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 30,
            offset: 0,
        }
    });

    
    return (
        <PokemonContext.Provider value={{data, loading, error, fetchMore, selectedPokemon, setSelectedPokemon}} >
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => {
    const context = useContext(PokemonContext);

    return context;
};

