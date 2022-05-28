import styled from "@emotion/styled";

export const Tr = styled.tr`

td{
   padding: 10px;
   margin: 10px;
}
    div.check{
        margin-left: 8px;
        width: 20px;
        height: 20px;
        font-size: 20px;
        border-radius: 6px;
    }
    div.check.allowed{
        color: ${props => props.theme.color.secondary[100]};
    }
    div.check.notAllowed{
        width: 17px;
        height: 17px;
        border:solid 2px ${props => props.theme.color.secondary[700]}; 
    }
`