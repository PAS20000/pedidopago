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
        position: absolute;
        z-index: 3;
        text-align: center;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 50%;
    }
    label.search{
        color: ${props => props.theme.color.secondary[700]};
        background-color: ${props => props.theme.color.secondary[100]};
    }
    label.org{
        background-color: ${props => props.theme.color.secondary[100]};
        color: ${props => props.theme.color.secondary[900]};
    }
`