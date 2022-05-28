import styled from "@emotion/styled";

export const Label = styled.div`
    text-align: center;
    color: ${props => props.theme.color.secondary[900]};
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    p{
        padding: 4px 8px;
        gap: 4px;
        width: 52px;
        border-radius: 80px;
    }
    
   p.active{
        background-color: ${props => props.theme.color.primary[900]};
   }
   p.inactive{
       background-color: ${props => props.theme.color.secondary[600]};
   }
`