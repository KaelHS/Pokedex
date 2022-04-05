import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { GET_POKEMON_SELECTED, GET_EVOLUTION_CHAIN, GET_SPECIES } from "../../graphql/queries";
import { useQuery } from '@apollo/client';
import { usePokemon } from "../../contexts/PokemonContext";
import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import { capitalize } from "../../components/helpers/capitalize";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AttributeElement, PokemonDetailContainer, TypeItem } from "./pokemon.styles";
import { axiosApi } from "../../services/axiosApi";
import { apolloClient } from "../../services/apollo";
import { formattedAttributes } from "../../components/helpers/attributeFormat";
import { typesColor } from "../../components/helpers/typesColor";
import { Loading } from "../../components/Loading";

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
    species: {
        name: string;
        url: string;
    }
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

interface ISpecie {
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
        };
    }[];
}

interface IPokemonChainEvolutionProps {
    name: string;
    image?: string;
  }

export default function Pokemon () {

    const { selectedPokemon } = usePokemon();
    const [ pageLoading, setPageLoading ] = useState(false);
    const { slug } = useRouter().query;
    const [ pokemonData, setPokemonData ] = useState<ISelectedPokemon>();
    const [ evolutionChain, setEvolutionChain ] = useState<any[]>();
    const [ species, setSpecies ] = useState<ISpecie>();
    const [ familyEvolutionChain, setFamilyEvolutionChain ] = useState<IPokemonChainEvolutionProps[]>([]);

    const { loading, error, data } = useQuery(GET_POKEMON_SELECTED, {
        variables: {
            name: slug
        },
        onCompleted: ( data ) => {

            setPokemonData( data.pokemon );

            // const fetchSpecieToGetChainEvolution = async () => {
            //     const specie = await axiosApi.get( data.pokemon.species.url ); 
            //     const specieData = await specie.data;

            //     const evolutionChain = await axiosApi.get( specieData?.evolution_chain?.url );
            //     const evolutionChainData = await evolutionChain.data;
            //     const familyEvolution = handleNameSpecies( evolutionChainData?.chain );
            //     setFamilyEvolutionChain( familyEvolution );

            // }
            // fetchSpecieToGetChainEvolution();
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

    useEffect( () => {

        
        const fetchSpecieToGetChainEvolution = async () => {
            if(pokemonData) {

                const specie = await axiosApi.get( pokemonData?.species?.url); 
                const specieData = await specie.data;
                setSpecies( specieData );
                const evolutionChain = await axiosApi.get( specieData?.evolution_chain?.url );
                const evolutionChainData = await evolutionChain.data;
                const familyEvolution = handleNameSpecies( evolutionChainData?.chain );
                setFamilyEvolutionChain( familyEvolution );
            }
            
        }
        fetchSpecieToGetChainEvolution();



    }, [pokemonData]);



    useEffect(() => {
        if (familyEvolutionChain.length) {
            setPageLoading( true );
            
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
            setPageLoading( false );
        }
      }, [familyEvolutionChain]);


    //   const getImagePath = () => {
    //       if(evolutionChain && selectedPokemon) {
    //         const findImage = evolutionChain.find(pokemon => pokemon.name === selectedPokemon.name);
    //       }
    //   }
      
    return(
        <Layout>
            <Head>
                <title>{selectedPokemon && capitalize(selectedPokemon?.name)} | Pokedex</title>
            </Head>
            { pageLoading 
                ? <Loading />
                : <>
                    <PokemonDetailContainer>
                        { console.log(species)}
                        <div className="contentContainer">
                            <div className="imageContainer">
                                { evolutionChain && selectedPokemon && !loading && <Image src={evolutionChain.length > 0 ? evolutionChain?.find( element => element.name === selectedPokemon?.name)?.image : ''} width={400} height={400} alt={selectedPokemon?.name}/>}
                            </div>
                            <div className="typeContainer">
                                <p>Type</p>
                                { pokemonData?.types?.map( (typeElement, index) => 
                                    <TypeItem key={Math.random() * index} className="typeItem" background={typesColor(typeElement.type?.name)}>
                                        <span>{capitalize(typeElement.type?.name)}</span>
                                    </TypeItem>
                                )}
                            </div>
                            <div className="bodyContainer">
                                <div className="bodyItem">
                                    <p>Heigth: <span>{ Number(pokemonData?.height) / 10} m </span></p>
                                </div>
                                <div className="bodyItem">
                                    <p>Weight: <span>{ Number(pokemonData?.weight) / 10} kg</span></p>
                                </div>
                            </div>
                            <div className="attributesContainer">
                                <p>Attributes</p>
                                <div className="attributesItem">
                                    { pokemonData?.stats?.map( (statElement, index) => (
                                        <AttributeElement key={Math.random() * index} background={formattedAttributes(statElement.stat.name).color}>
                                            <span>{ statElement.base_stat} </span>
                                            <span>{ formattedAttributes(statElement.stat.name).attributeTextFormatted }</span>
                                        </AttributeElement> 
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="contentContainer">
                            <div className="evolutionContainer">
                                <p>Evolution</p>
                                <div className="evolutionItens">
                                     {  evolutionChain && selectedPokemon && evolutionChain.map( (evolutionElement, index) => (
                                         <div key={Math.random() * index} className="evolutionItem">
                                                <Image src={evolutionElement.image} width={130} height={130} alt={evolutionElement.name}/>
                                                <span>{capitalize(evolutionElement.name)}</span>
                                        </div>
                                     ))}
                                </div>
                            </div>
                            <div className="descriptionContainer">
                               
                                {/* { species && species?.flavor_text_entries.map( element => (
                                    element.language.name === 'en' && <p key={element.language.name}>{element.flavor_text}</p>
                                )) } */}
                                    
                            </div>
                        </div>
                    </PokemonDetailContainer>
                </>
            }
        </Layout>
    ); 
}

// export const getServerSideProps: GetServerSideProps = async(ctx) => {
    
//     const { slug } = ctx.query;

//     const client = apolloClient();
//     const { data } = await client.query({query: GET_POKEMON_SELECTED, variables: { name: slug }});

//     // if(!session?.activeSubscription) {
//     //     return{
//     //         redirect: {
//     //             destination:'/',
//     //             permanent: false,
//     //         }
//     //     }
//     // }


//     return {
//         props: {
//             slug
//         }
//     }

    
// }