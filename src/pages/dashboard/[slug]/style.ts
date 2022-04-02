import styled from "styled-components";

export const PokemonDetailContainer = styled.div`
    width: 100%;
    height: 100%;
    /* display: flex; */
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 0 3rem;
    padding: 2rem;

    .contentContainer {
        display: flex;
        flex-direction: column;
        flex: 1;
        /* width: 50%; */
        
        .imageContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 1.5rem;
            height: 50%;
            background: blue;
            margin-bottom: 2rem;
            border-radius: 1rem;
        }

        .typeContainer {
            display: flex;
            height: 12.5%;
            align-items: center;
            margin-bottom: 2rem;
            padding: 1rem 1.5rem;
            background: blue;
            border-radius: 0.5rem;


            p {
                font-weight: bold;
            }

            .typeItem {
                padding: 0.5rem 1rem;
                border: 1px solid black;
                margin-left: 2rem;
                border-radius: 0.5rem;
                background: #fff;


            }
            
        }
        
        .bodyContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 3rem;
            height: 12.5%;
            align-items: center;
            margin-bottom: 2rem;
            
            .bodyItem {
                display: flex;
                align-items: center;
                height: 100%;
                background: blue;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;

            }
        }

        .attributesContainer {
            display: flex;
            flex-direction: column;
            height: 25%;
            /* align-items: center; */
            /* text-align: left; */
            /* align-items: center; */
            /* justify-content: center; */
            padding: 1rem 1.5rem;
            background: blue;
            border-radius: 0.5rem;
            /* justify-content: center; */

            p {
                font-weight: bold;
                margin-bottom: 1rem;
            }  

            .attributesItem {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 1rem 3rem;

                div {
                    padding: 0.5rem 1rem;
                    border: 1px solid black;
                    border-radius: 0.5rem; 
                    background: #fff;
                }
            }
        }

        .evolutionContainer {
            height: 30%;
            padding: 1rem 1.5rem;
            background: blue;
            margin-bottom: 2rem;
            border-radius: 1rem;
        }

        .descriptionContainer {
            height: 70%;
            padding: 1rem 1.5rem;
            background: blue;
            border-radius: 1rem;
            overflow-y: auto;
        }

    }
`;