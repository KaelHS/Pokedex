import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";


// interface PostProps {
//     post: {
//         slug:string;
//         title:string;
//         content:string;
//         updatedAt: string;
//     }
// }

export default function Post ( { pokemon }: any) {
    return(
        <>
        {/* <Head>
            <title>{post.title} | ignews</title>
        </Head> */}
        <main>
           
        </main>
        </>
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