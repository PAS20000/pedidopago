import styled from "@emotion/styled";

export const LabelContainer = styled.div`
    padding: 10px;
    margin-left: 5px;
    pointer-events: none;
    text-transform: capitalize;
   
    label{
        width: ${props => props.className};
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        color: rgba(0,0,0, 0.5);
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.secondary[100]};
    }
`