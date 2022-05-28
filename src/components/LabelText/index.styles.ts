import styled from "@emotion/styled";

export const LabelContainer = styled.div`
    padding: 10px;
    margin-left: 5px;
    pointer-events: none;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    
    label{
        width: ${props => props.className};
        text-align: center;
        color: ${props => props.theme.color.secondary[700]};
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.secondary[100]};
    }
`