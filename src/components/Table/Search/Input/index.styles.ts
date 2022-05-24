import styled from "@emotion/styled";


export const Container = styled.div`
   
`

export const InputSearch = styled.input`
    padding: 10px;
    width: 97.5%;
    border-radius: 10px;
    opacity: 0.5;
    border-color: ${props => props.theme.color.tertiary};
    border: solid 1px;
    outline: none;
    ::placeholder{
        opacity: 1;
        color:  ${props => props.theme.color.text};
        padding: 20px;
    }
`

export const Icon = styled.span`
    position: absolute;
    padding: 9px;
`

export const LabelContainer = styled.div`
    padding: 10px;
    width: 97.5%;
    border-radius: 10px;
    border-color: ${props => props.theme.color.tertiary};
    label{
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.bg};
    }
`