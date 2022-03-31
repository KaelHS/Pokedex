import styled from "styled-components";

export const SidebarContainer = styled.nav`
    height: 100vh;
    overflow-y: hidden;
    width: 20%;
    padding: 3rem 1.5rem;
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
        background: #ccc;
        padding: 1rem 1rem;
        max-width: 20rem;
        border-radius: 1.5rem; 

        input{
            width: 90%;
            margin-right: 1rem;
            background: inherit;
            border: none;
            line-height:1rem;
            color: #fff;
            outline: none;
            
        }
    }
`;
