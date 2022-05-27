import styled from "@emotion/styled";

export const LabelContainer = styled.div`
    padding: 6px;
    margin-left: 5px;
    pointer-events: none;
    
    label{
        width: 5rem;
        text-align: center;
        font-weight: bold;
        font-size: 0.7rem;
        color: rgba(0,0,0, 0.5);
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.secondary[100]};
    }
`