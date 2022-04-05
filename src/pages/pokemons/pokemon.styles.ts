import styled from "styled-components";

export const PokemonDetailContainer = styled.div`
    width: 100%;
    height: calc(100vh - 6.5rem);
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 0 3rem;
    padding: 2rem;
    background: ${props => props.theme.colors.background1};

    .contentContainer {
        display: flex;
        flex-direction: column;
        
        .imageContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 1.5rem;
            background: ${props => props.theme.colors.background2};
            margin-bottom: 2rem;
            border-radius: 1rem;
        }

        .typeContainer {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            padding: 1rem 1.5rem;
            background: ${props => props.theme.colors.background2};
            border-radius: 0.5rem;

            p {
                font-weight: bold;
                font-size: 1.75rem;
                color: ${props => props.theme.colors.text1};
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
                background: ${props => props.theme.colors.background2};
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;

                p {
                    font-weight: bold;
                    font-size: 1.5rem;
                    color: ${props => props.theme.colors.text1};

                    span {
                        margin-left: 0.5rem;
                        font-weight: normal;
                    }
                }

            }
        }

        .attributesContainer {
            display: flex;
            flex-direction: column;
            padding: 1rem 1.5rem;
            background: ${props => props.theme.colors.background2};
            border-radius: 0.5rem;

            p {
                font-weight: bold;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                color: ${props => props.theme.colors.text1};
            }  

            .attributesItem {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 1rem 3rem;
                color: ${props => props.theme.colors.text1};

            }
        }

        .evolutionContainer {
            padding: 1rem 1.5rem;
            background: ${props => props.theme.colors.background2};
            margin-bottom: 2rem;
            border-radius: 1rem;

            p {
                font-weight: bold;
                margin-bottom: 2rem;
                font-size: 1.5rem;
                color: ${props => props.theme.colors.text1};
            }

            .evolutionItens {

                display: flex;
                align-items: center;
                
                .evolutionItem {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 2rem;

                    span {
                        margin-top: 0.75rem;
                        font-size: 1.3rem;
                        color: ${props => props.theme.colors.text1};
                    }
                }

            }
        }

        .descriptionContainer {
            flex: 1;
            padding: 1rem 1.5rem;
            background: ${props => props.theme.colors.background2};
            border-radius: 1rem;
            overflow-y: auto;
        }

    }
`;

interface ICustromBackground {
    background: string;
}

export const AttributeElement = styled.div<ICustromBackground>`

    padding: 0.75rem 1rem;
    border: 1px solid black;
    border-radius: 0.5rem; 
    background: ${props => props.background};
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.125rem;
    border: none;
`;

export const TypeItem = styled.div<ICustromBackground>`

    padding: 0.5rem 1rem;
    border: 1px solid black;
    margin-left: 2rem;
    border-radius: 0.5rem;
    background: ${props => props.background};
    font-size: 1.5rem;
    color: #fff;
    border: none;

`;