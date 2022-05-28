import styled from "@emotion/styled";
import { Media } from "../../utils/breakPoints";



export const Container = styled.div`
    padding: 10px;
`

export const ContainerTable = styled.table`
 @keyframes show {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    font-size: 12px;
    color: ${props => props.theme.color.secondary[900]};
    border-collapse: collapse;
    width: 100%;
    tr{
        text-transform: capitalize;
        animation: show 1s;
    }
    td{
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        width: 124px;
        height: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        padding: 5px;
        text-align: start;
    }
`

export const Title = styled.h2`
    @keyframes show {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    animation: show 1s;
`