import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: transparent;
    color: ${props => props.theme.color.secondary[900]};
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    &:hover{
        transition: 1s;
        opacity: 0.5;
    }
    p{
        margin-left: 5px;
        margin-top: 2px;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.color.secondary[900]};
    }
    span{
        font-size: 18px;
    }
`

export const Flex = styled.div`
    display: flex;   
`

export const Grid = styled.div`
    display: grid;
`