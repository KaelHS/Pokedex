/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/FakeAuthContext";
import Login from "..";
import { usePokemon } from "../../contexts/PokemonContext";
import { Loading } from "../../components/Loading";
import { parseCookies } from 'nookies';
import { capitalize } from "../../components/helpers/capitalize";
import { Container } from "./pokemons.styles";


const Pokemons = () => {

    const router = useRouter();
    const { isAuthenticated } = useAuth();
    const { data, loading, error } = usePokemon();
    const { name } = parseCookies();

    useEffect( () => {
        if(!isAuthenticated) {
            router.push('/');
        }
    }, [router, isAuthenticated]);

    if (loading) return <span>Loading...</span>;
    if (error) return <span>Error! {error.message}</span>;


    if(!isAuthenticated) {
        return <Login />
    }
    
    return(
       <Layout>
           <Container>
                <h1>Welcome {capitalize(name)}<br />to your <br/>Pokedex!</h1>
                <img className="pokeball" src="/icons/pokeball.svg" alt="pokeball" />
                <img className="pokemons" src="/pokemons2.png" alt="pokemons"/>
           </Container>
       </Layout>
    );
}



export default Pokemons;