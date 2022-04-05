import styled from "styled-components";

export const SidebarContainer = styled.nav`
    height: 100vh;
    overflow-y: hidden;
    width: 20%;
    padding: 3rem 2rem;
    background: ${props => props.theme.colors.background4};
    color: ${props => props.theme.colors.text4};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid ${props => props.theme.colors.text4};

        .logoSection {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;

            h1 {
                font-size: 2.25rem;
                margin-left: 0.5rem;
            }
        }

        span {
            font-size: 1.125rem;
            color: ${props => props.theme.colors.text3};
            margin-bottom: 1.5rem;
        }
    }

    .searchBox {
        display: flex;
        align-items: center;
        background: ${props => props.theme.colors.background1};
        padding: 0.75rem 1rem;
        width: 100%;
        border-radius: 1.5rem; 

        input{
            width: 90%;
            margin-right: 1rem;
            background: inherit;
            border: none;
            line-height:1rem;
            color: ${props => props.theme.colors.text1};
            font-size: 1.125rem;
            outline: none;
            
        }
    }

    .pokemonListSection {
        width: 100%;
        overflow-y: auto;
        
        &::-webkit-scrollbar {
            width: 0.5rem; 
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.blue};
            border-radius: 100px;
        }

        ul {
            padding: 0 0.5rem;

            li {
                padding: 0.25rem 0;

                a {
                    font-size: 1.25rem;
                }
            }
        }
    }
`;
