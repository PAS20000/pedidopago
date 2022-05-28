import styled from "@emotion/styled";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    position: absolute;
    height: 100vh;
    border: 1px solid #EAEFED;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    width: 200px;
`