import styled from "styled-components";

export const LayoutContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: flex-start;
    min-height: 100vh;
    height: 100%;

    .content {
        background: ${props => props.theme.colors.background1};
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 100vh;
        height: 100vh;
        overflow: hidden;
    }
`;