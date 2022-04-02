import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { GET_POKEMON_SELECTED, GET_EVOLUTION_CHAIN } from "../../../graphql/queries";
import { useQuery } from '@apollo/client';
import { usePokemon } from "../../../contexts/PokemonContext";
import { useRouter } from 'next/router'
import Layout from "../../../components/Layout";
import { capitalize } from "../../../components/helpers/capitalize";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PokemonDetailContainer } from "./style";

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
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        }
    }[];
  }


export default function Pokemon () {

    const { selectedPokemon } = usePokemon();
    const { slug } = useRouter().query;
    const [ pokemonData, setPokemonData ] = useState<ISelectedPokemon>();
    const [ evolutionChain, setEvolutionChain ] = useState<any>();
    const { loading, error, data } = useQuery(GET_POKEMON_SELECTED, {
        variables: {
            name: slug
        }
    });
    const { id } = data?.pokemon;
    const chainEvolutionQuery = useQuery(GET_EVOLUTION_CHAIN, {
        variables: {
            id: id.toString()
        }
    })

    useEffect( () => {
        if(data && data.pokemon) {
            setPokemonData(data.pokemon);
            setEvolutionChain(chainEvolutionQuery.data?.evolutionChain);
        }
    }, [data]);

    return(
        <Layout>
            <Head>
                <title>{selectedPokemon && capitalize(selectedPokemon?.name)} | Pokedex</title>
            </Head>
            <PokemonDetailContainer>
                <div className="contentContainer">
                    <div className="imageContainer">
                        {pokemonData && <Image src={pokemonData?.sprites?.front_default} width={400} height={400} alt={selectedPokemon?.name} />}
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
                {console.log(chainEvolutionQuery)}
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