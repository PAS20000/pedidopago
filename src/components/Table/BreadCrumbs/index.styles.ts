import styled from '@emotion/styled'

export const Flex = styled.div`
display: flex;
    h3{
        color: ${props => props.theme.color.text};
        margin-right: 10rem;
        width: 12rem;
    }
    .select{
        pointer-events: none;
        text-align: end;
        pointer-events: none;
        border-bottom: solid 2px;
        border-color: ${props => props.theme.color.primary};
        margin-bottom: 10px;
    }
    .default{
        cursor: pointer;
        text-align: end;
        opacity: 0.5;
        border-bottom: solid 2px;
        border-color: ${props => props.theme.color.tertiary};
        margin-bottom: 10px;
        &:hover{
            transition: 1s;
            border-color: ${props => props.theme.color.primary};
            opacity: 1;
        }   
    }
    .hr{
        opacity:0.5;
        border-bottom: solid 2px;
        border-color: ${props => props.theme.color.tertiary};
        margin-bottom: 10px;
        width: 100%;
    }
   
`