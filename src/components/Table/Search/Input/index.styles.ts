import styled from "@emotion/styled";


export const Container = styled.div`
   padding: 5px;
`

export const InputSearch = styled.input`
    padding: 12px 30px;
    width: 93%;
    border-radius: 10px;
    border: solid 1px;
    outline: none;
    border-color: rgba(0,0,0, 0.5);
    ::placeholder{
        font-weight: bold;
        color:  ${props => props.theme.color.text};
    }
`

export const Icon = styled.span`
    position: absolute;
    padding: 9px;
`

export const LabelContainer = styled.div`
    padding: 6px;
    margin-left: 5px;
    label{
        width: auto;
        font-weight: bold;
        font-size: 12px;
        color: rgba(0,0,0, 0.5);
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.bg};
    }
`