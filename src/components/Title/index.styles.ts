import styled from "@emotion/styled";
import { Media } from "../../utils/breakPoints";

export const Container = styled.h1`
    color: ${props => props.theme.color.secondary[1000]};
    text-align: start;
    margin-left: 15%;
    margin-top: 51px;
    
    ${Media(1)}{
        margin: 1rem;
    }
`