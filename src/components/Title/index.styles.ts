import styled from "@emotion/styled";

export const Container = styled.h1`
    color: ${props => props.theme.color.secondary[1000]};
    text-align: start;
    margin-left: 15%;
    margin-top: 51px;
    div{
        display: flex;
        h1{
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 100%;  
            color: ${props => props.theme.color.secondary[1000]};
        }
        button{
            padding: 10px;
            margin: 10px;
            background: #EAEFED;
            border-radius: 80px;
            border: none;
        }
    }
    
`