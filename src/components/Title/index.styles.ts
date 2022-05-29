import styled from "@emotion/styled";
import { Media } from "../../utils/breakPoints";

export const Container = styled.h1`
    
    color: ${props => props.theme.color.secondary[1000]};
    text-align: start;
    transform: translate(25vh,30px);
    margin-top: 51px;

    ${Media(0, 'min')}{
        transform: translate(50vh, 50px)
    }

    div{
        display: flex;
        h1{
            ${Media(1, 'max')}{
                transform: translate(20vh, 24px);
            }
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 100%;  
            color: ${props => props.theme.color.secondary[1000]};
        }
        a{
            ${Media(1, 'max')}{
                margin-right: 5px;
            }
            margin-top: 18px;
            margin-right: 16px;
            width: 36px;
            height: 36px;
            text-decoration: none;
            color: ${props => props.theme.color.secondary[1000]};
            border-radius: 80px;
            background: ${props => props.theme.color.secondary[600]};
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