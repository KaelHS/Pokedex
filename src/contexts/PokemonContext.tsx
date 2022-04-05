import { createContext, useState, useEffect, useContext } from 'react';
import { gql, useQuery, useLazyQuery  } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/queries';
interface IPokemonContextData {
    data: { pokemons: IResponseData };
    loading: boolean;
    error: any;
    fetchMore: any;
    selectedPokemon: IPokemonListItem | undefined;
    setSelectedPokemon: React.Dispatch<React.SetStateAction<any>>;
    allPokemons: IPokemonListItem[];
    filteredPokemons: IPokemonListItem[];
    setSearch: React.Dispatch<React.SetStateAction<any>>;
    search: string;

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
    const [ allPokemons, setAllPokemons ] = useState<IPokemonListItem[]>([]);
    const [ search, setSearch ] = useState('');

    const { data, loading, error, fetchMore } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 30,
            offset: 0,
        }
    });

    const allData = useQuery(GET_POKEMONS, {
        skip: !data,
        variables: {
            limit: data?.pokemons.count,
            offset: 0,
        }
    });

    useEffect(() => {
        if(data) {
            // console.log(allData)

            // setAllPokemons(allData.data?.pokemons?.results.map( (pokemon: { name: any }) => pokemon.name ));
            setAllPokemons(allData.data?.pokemons?.results);
        }
    } , [data]);

    const filteredPokemons = allPokemons ? allPokemons.filter( ( pokemon ) => pokemon.name.includes(search.toLowerCase()) ) : [];
    
    return (
        <PokemonContext.Provider value={{data, loading, error, fetchMore, selectedPokemon, setSelectedPokemon, allPokemons, filteredPokemons, search, setSearch}} >
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => {
    const context = useContext(PokemonContext);

    return context;
};

