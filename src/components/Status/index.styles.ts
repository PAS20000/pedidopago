import styled from "@emotion/styled";

export const Label = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.color.secondary[900]};
    text-transform: capitalize;

   .active{
        background-color: ${props => props.theme.color.primary[300]};
        border-radius: 20px;
        padding: 5px;
        margin: 5px;
        width: 90%;
   }
   .inactive{
       background-color: ${props => props.theme.color.secondary[300]};
       border-radius: 20px;
       padding: 5px;
       margin: 5px;
       width: 90%;
   }
`