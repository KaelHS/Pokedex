import { useEffect, useLayoutEffect } from "react";
import { NextPage } from "next";
import { useRouter, Router } from "next/router";
import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/FakeAuthContext";
import Login from "..";

const Dashboard: NextPage = () => {

    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect( () => {
        if(!isAuthenticated) {
            router.push('/');
        }
    }, [router, isAuthenticated]);

    if(!isAuthenticated) {
        return <Login />
    }
    
    return(
       <Layout>
           <h2>teste</h2>
       </Layout>
    );
}

export default Dashboard;