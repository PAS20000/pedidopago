import styled from "@emotion/styled";


export const Container = styled.div`
   padding: 10px;
   margin: 5px;
   margin-left: -20px;
`

export const InputSearch = styled.input`
    padding: 1rem 2.5rem;
    width: 91%;
    border-radius: 10px;
    border: solid 1px;
    outline: none;
    border-color: rgba(0,0,0, 0.5);
    ::placeholder{
        font-weight: bold;
        color:  ${props => props.theme.color.secondary[900]};
    }
`

export const Icon = styled.span`
    position: absolute;
    padding: 0.7rem;
    font-size: 1.5rem;
    pointer-events: none;
`

export const LabelContainer = styled.div`
    padding: 6px;
    margin-left: 5px;
    pointer-events: none;
    label{
        width: auto;
        font-weight: bold;
        font-size: 1rem;
        color: rgba(0,0,0, 0.5);
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.secondary[100]};
    }
`