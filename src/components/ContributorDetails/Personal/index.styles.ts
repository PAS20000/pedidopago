import styled from "@emotion/styled";

export const Card = styled.div`
    background-color: ${props => props.theme.color.secondary[400]};
    padding: 16px;
    width: 286.67px;
    height: 35px;
    margin-left: 24px;
    border: solid 2px ${props => props.theme.color.secondary[500]};
    border-radius: 8px;
    
    div{
        display: flex;
    }
    p{
        color: ${props => props.theme.color.secondary[1000]};
        font-weight: bold;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        margin: 2px;
        span{
            width: 52px;
            height: 14px;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 120%;
        }
    }
`

export const Icon = styled.div`
    border-radius: 50%;
    text-align: center;
    margin-right: 0.5rem;
    font-size: 18px;
    background-color: ${props => props.theme.color.secondary[700]};
    svg{
       padding: 0.6rem;
    }
`