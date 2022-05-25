import styled from "@emotion/styled";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    position: absolute;
    height: 100vh;
    padding: 75px;
    box-shadow: 0 0 0.4em rgba(0,0,0,0.5);
`