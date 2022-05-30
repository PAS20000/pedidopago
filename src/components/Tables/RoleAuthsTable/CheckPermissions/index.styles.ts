import styled from "@emotion/styled";
import { Media } from "../../../../utils/breakPoints";

export const Check = styled.div`
    div.check{
        margin-left: 8px;
        width: 20px;
        height: 20px;
        font-size: 20px;
        border-radius: 6px;

        ${Media(1, 'max')}{
            font-size: 20px;
        }
    }
    div.check.allowed{
        color: ${props => props.theme.color.secondary[100]};
        background-color:${props => props.theme.color.primary[1000]};
    }
    div.check.notAllowed{
        width: 17px;
        height: 17px;
        border:solid 2px ${props => props.theme.color.secondary[700]};
    }
`