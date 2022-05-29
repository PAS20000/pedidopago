import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    

    ${Media(1)}{
        grid-template-columns: 1fr;
    }
`