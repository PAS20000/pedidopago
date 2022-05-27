import styled from "@emotion/styled";
import { Media } from "../../utils/breakPoints";


export const ContainerStyle = styled.div`
   margin-left: 20%;
   background-color: ${props => props.theme.color.secondary[100]};
   margin-top: 0;
   padding: 1rem;
   box-shadow: ${props => props.theme.globalProps.shadow};
   border-radius: 10px;
   border: ${props => props.className && 'solid 1px'};

   ${Media(1)}{
      padding: 40px, 0px, 40px, 0px;
      margin: 0.5rem;
      border-color: ${props => props.theme.color.secondary[400]};
   }
`