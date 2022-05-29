import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    

    ${Media(1)}{
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h2`
    animation: show 1s;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-align: start;
    color: ${props => props.theme.color.secondary[1000]};
`