import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    position: absolute;
    height: 500vh;
    border: 1px solid #EAEFED;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    width: 30vh;
    
    ${Media(1, 'max')}{
        display: none;
    }
`