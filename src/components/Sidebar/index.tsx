import Image from 'next/image';
import React , { useEffect, useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { usePokemon } from '../../contexts/PokemonContext';
import { capitalize } from '../helpers/capitalize';
import { SidebarContainer } from './style';
import Link from 'next/link';

const Sidebar = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [sentinelIsVisible, setSentinelIsVisible] = useState<boolean>(false);
    const { fetchMore, setSelectedPokemon, search, setSearch, filteredPokemons } = usePokemon();
    const sentinelRef = useRef<any>();

    useEffect(() => {
      // if(data?.pokemons?.results.length <= data?.pokemons?.count ) {
        fetchMore({
          variables: {
            offset: currentPage * 20,
          },
          updateQuery: (prev:any, { fetchMoreResult }:any) => {
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              pokemons: {
                ...prev.pokemons,
                next: fetchMoreResult.pokemons.next,
                results: [...prev.pokemons.results, ...fetchMoreResult.pokemons.results]
              }
            });
          }
        });
      //   setSentinelIsVisible(false);
      // }   
    }, [currentPage]);

    useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setCurrentPage((currentValue) => currentValue + 1);
          setSentinelIsVisible(entries.some(entry => entry.isIntersecting));
        } 
      })
      intersectionObserver.observe(sentinelRef.current);
      return () => intersectionObserver.disconnect();
    }, []);



    useEffect( () => {},[search]);
  

  return (
    <SidebarContainer>
        <header>
          <div className='logoSection'>
            <Image className="pokeballLogo" src="/icons/pokeball.svg" alt="pokeball icon" width={30} height={30} />
            <h1>POKEDEX</h1>
            <h2>{ sentinelIsVisible ? 'VISIVEL' : 'NÃO VISIVEL'}</h2>
          </div>
          <span>Everything you wanted to know about your favorite pocket monsters!</span>
          <div className="searchBox">
              <input 
                  type="text"
                  placeholder="Search by name or number" 
                  value={search}
                  onChange={ ({target}) => setSearch(target.value)}
              />
              <FaSearch />
          </div>
        </header>
        <section className='pokemonListSection'>
          <ul>
            { filteredPokemons && filteredPokemons.map((pokemon, index) => (
              <li key={Math.random() * index}>
                <Link href={`/pokemons/${pokemon.name}`}  >
                  <a onClick={() => setSelectedPokemon(pokemon)}>{`${("0000" + (index+1)).slice(-4)} - ${capitalize(pokemon.name)} `}</a>
                </Link>
              </li>
            ))}
            <li ref={sentinelRef}></li>
            { console.log(filteredPokemons) }
          </ul>
        </section>

    </SidebarContainer>

  );
};

export default Sidebar;