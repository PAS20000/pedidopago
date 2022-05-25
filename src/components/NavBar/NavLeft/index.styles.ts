import styled from "@emotion/styled";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    position: absolute;
    height: 100vh;
    padding: 80px;
    box-shadow: ${props => props.theme.globalProps.shadow};
`