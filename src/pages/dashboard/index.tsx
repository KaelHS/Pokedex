import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/FakeAuthContext";
import Login from "..";
import { usePokemon } from "../../contexts/PokemonContext";

const Dashboard = () => {

    const router = useRouter();
    const { isAuthenticated } = useAuth();
    const { data, loading, error } = usePokemon();

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
           <h2>teste</h2>
           {console.log(data)}
       </Layout>
    );
}



export default Dashboard;