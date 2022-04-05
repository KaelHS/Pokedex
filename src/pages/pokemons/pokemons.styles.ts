import styled, { keyframes } from "styled-components";


const run = keyframes`
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(300px);
  }
  100%{
    transform: translateX(0);

  }
`;

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(180deg) ;
  }
  100%{
    transform: rotate(360deg) ;

  }
`;

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 6.5rem);
    position: relative;
    overflow-y: hidden;
    padding: 2rem;
    background: ${props => props.theme.colors.background1};

    h1 {
        font-size: 6.5rem;
        font-weight: 700;
        margin: 5rem 0 0 3rem;
        color: ${props => props.theme.colors.text1};

        
    }
    .pokeball {
        animation: ${spin} 2s linear infinite alternate, ${run} 4s ease infinite alternate;

    }

    .pokemons {
        position: absolute;
        height: 95%;
        display:block;
        bottom: 1rem;
        right: 2rem; 
        
    }

`;