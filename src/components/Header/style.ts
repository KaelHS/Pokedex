import styled from 'styled-components';

const Container = styled.header`
  background-color: ${(props) => props.theme.colors.background1};
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.1rem;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: ${(props) =>
    props.theme.name === 'dark'
      ? `solid 1px ${props.theme.colors.background2}`
      : 'none'};
  box-shadow: 1px 1px 8px ${(props) => props.theme.colors.black};

  color: ${(props) => props.theme.colors.text1};

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 12rem;

    .themeArea {
      display: flex;
      align-items: center;

      svg {
        height: 1.5rem;
        width: 1.5rem;
        margin: 0 0.25rem;
      }
    }

    .logoutButton {
      border: none;
      background-color: transparent;
      transition: filter 0.2s ease-in-out;
      
      svg {
        height: 2.25rem;
        width: 2.25rem;
      }

      &:hover {
        filter: brightness(0.9);
      }

    }
  }

`;

export default Container;