import styled from "@emotion/styled";
import { Media } from "../../utils/breakPoints";

export const Container = styled.h1`
    
    color: ${props => props.theme.color.secondary[1000]};
    text-align: start;
    transform: translate(26vh,30px);
    margin-top: 51px;
    div{
        display: flex;
        h1{
            ${Media(1)}{
                padding: 10px;
                font-size: 18px;
                margin-top: 18px;
                margin-bottom: 0;
            }
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 100%;  
            color: ${props => props.theme.color.secondary[1000]};
        }
        a{
            ${Media(1)}{
                margin-right: 5px;
            }
            margin-top: 18px;
            margin-right: 16px;
            width: 36px;
            height: 36px;
            text-decoration: none;
            color: ${props => props.theme.color.secondary[1000]};
            border-radius: 80px;
            background: ${props => props.theme.color.secondary[600]}; //#EAEFED
            &:hover{
                transition: 1s;
                opacity: 0.5;
            }
            svg{
                font-size: 24px;
                padding: 5px;
            }
        }
    }
    
`