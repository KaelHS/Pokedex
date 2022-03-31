import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/background5.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;

  .form-area {
    width: 100%;
  }
  .content {
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    background: #00000063;
    background: rgb(0, 0, 255, 0.4);
    backdrop-filter: blur(30px);
    box-shadow: 1px 1px 12px 0 black;
    padding: 1rem;
    border: none;
    //border-radius: 4px;
    color: ${(props) => props.theme.colors.text4};
    width: 22rem;
    height: 100%;
    
    h1 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  .logoContainer{
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 3rem;
      }

      .logoImage {
          margin: 0;
          padding: 0;
          margin-right: 1rem;
      }
  }

  .loginInputsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;

    input {
      padding: 0.6em 0 0 0.2em;
      background: transparent;
      border: none;
      border-bottom: solid 1px;
      margin-bottom: 1.5em;
      font-size: 1.1em;
      outline: none;
      color: ${(props) => props.theme.colors.text4};
      width: 100%;
      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus,
      :-webkit-autofill:active {
        transition: all 0s 500000s;
      }
      ::placeholder {
        color: ${(props) => props.theme.colors.text3};
      }
      :-ms-input-placeholder {
        color: ${(props) => props.theme.colors.text3};
      }
      ::-ms-input-placeholder {
        color: ${(props) => props.theme.colors.text3};
      }
    }
  }

  .loginButton {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0.25rem 1.25rem;
    border: none;
    border-radius: 1rem;
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.text4};
    font-size: 1.25rem;
    
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
  }


`;

export { Container };