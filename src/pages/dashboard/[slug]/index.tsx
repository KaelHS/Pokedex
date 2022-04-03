import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { GET_POKEMON_SELECTED, GET_EVOLUTION_CHAIN, GET_SPECIES } from "../../../graphql/queries";
import { useQuery } from '@apollo/client';
import { usePokemon } from "../../../contexts/PokemonContext";
import { useRouter } from 'next/router'
import Layout from "../../../components/Layout";
import { capitalize } from "../../../components/helpers/capitalize";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PokemonDetailContainer } from "./style";
import { axiosApi } from "../../../services/axiosApi";

interface ISelectedPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: {
        base_stat: number;
        stat: {
            name: string;
        }
    }[];
    species: string;
    sprites: any;
    types: {
        type: {
            name: string;
        }
    }[];
  }

interface IEvolvesProps {
    species: {
      name: string;
    };
    evolves_to: IEvolvesProps[];
}

interface IPokemonChainEvolutionProps {
    name: string;
    image?: string;
  }

export default function Pokemon () {

    const { selectedPokemon } = usePokemon();
    const { slug } = useRouter().query;
    const [ pokemonData, setPokemonData ] = useState<ISelectedPokemon>();
    const [ evolutionChain, setEvolutionChain ] = useState<IPokemonChainEvolutionProps[]>();
    const [ species, setSpecies ] = useState<any[]>([]);
    const [ familyEvolutionChain, setFamilyEvolutionChain ] = useState<IPokemonChainEvolutionProps[]>([]);

    const { loading, error, data } = useQuery(GET_POKEMON_SELECTED, {
        variables: {
            name: slug
        },
        onCompleted: ( data ) => {

            setPokemonData( data.pokemon );

            const fetchSpecieToGetChainEvolution = async () => {
                const specie = await axiosApi.get( data.pokemon.species.url ); 
                const specieData = await specie.data;

                const fetchEvolutionChain = async () => {
                    const evolutionChain = await axiosApi.get( specieData?.evolution_chain?.url );
                    const evolutionChainData = await evolutionChain.data;
                    const familyEvolution = handleNameSpecies( evolutionChainData?.chain );
                    setFamilyEvolutionChain( familyEvolution );
                }
                fetchEvolutionChain();
            }
            fetchSpecieToGetChainEvolution();
        }
    });

    const handleNameSpecies = useCallback(({ species, evolves_to }: IEvolvesProps) => {

          let namesPokemons = [
            {
              name: species.name,
            },
          ];
          evolves_to.forEach((evolves:any) => {
            namesPokemons = namesPokemons.concat(handleNameSpecies(evolves));
          });
          return namesPokemons;
    },[]);

    useEffect(() => {
        if (familyEvolutionChain.length) {

          const urls = familyEvolutionChain.map(pokemon => axiosApi.get(`/pokemon/${pokemon.name}`));
    
          Promise.all([...urls]).then(responses => {
            const result = responses.map((response, index) => {
              const { sprites } = response.data;

              return {
                ...familyEvolutionChain[index],
                image: sprites?.other['official-artwork'].front_default,
              };
            });
            setEvolutionChain(result);
          });
        }
      }, [familyEvolutionChain]);


    return(
        <Layout>
            <Head>
                <title>{selectedPokemon && capitalize(selectedPokemon?.name)} | Pokedex</title>
            </Head>
            <PokemonDetailContainer>
                { console.log(evolutionChain)}
                <div className="contentContainer">
                    <div className="imageContainer">
                        {evolutionChain && <Image src={evolutionChain?.image} width={400} height={400} alt={selectedPokemon?.name} />}
                    </div>
                    <div className="typeContainer">
                        <p>Type</p>
                        { pokemonData?.types?.map( (typeElement, index) => 
                            <div key={Math.random() * index} className="typeItem">
                                <span>{typeElement.type?.name}</span>
                            </div>
                        )}
                    </div>
                    <div className="bodyContainer">
                        <div className="bodyItem">
                            <p>Heigth <span>{ pokemonData?.height}</span></p>
                        </div>
                        <div className="bodyItem">
                            <p>Weight <span>{ pokemonData?.weight}</span></p>
                        </div>
                    </div>
                    <div className="attributesContainer">
                        <p>Attributes</p>
                        <div className="attributesItem">
                            { pokemonData?.stats?.map( (statElement, index) => (
                                <div key={Math.random() * index}>
                                    <span>{ statElement.base_stat} </span>
                                    <span>{ statElement.stat.name}</span>
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="evolutionContainer">
                        <p>Evolution</p>
                        <div className="evolutionItem">
                            {/* <img src="" alt="" /> */}
                            <span>Nome pokemon</span>
                        </div>
                    </div>
                    <div className="descriptionContainer">
                        <article>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ipsum accusamus ducimus culpa voluptatem molestias alias mollitia ipsa. Cupiditate tempore odio sed tempora. Aliquid assumenda aliquam sequi eaque harum.</p>
                        </article>
                    </div>
                </div>
            </PokemonDetailContainer>
        </Layout>
    ); 
}

export const getServerSideProps: GetServerSideProps = async({ req, params }) => {
    
    // const { slug } = params;

    const pokemon = {}

    return {
        props: {
            pokemon
        }
    }

    
}