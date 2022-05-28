import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";


export const ContainerStyle = styled.div`
   margin-left: 15%;
   background-color: ${props => props.theme.color.secondary[100]};
   margin-top: 0;
   padding: 40px 24px;
   box-shadow: ${props => props.theme.globalProps.shadow};
   border-radius: 8px;
   border: ${props => props.className && 'solid 1px'};
   width: 956px;

   ${Media(1)}{
      padding: 40px, 0px, 40px, 0px;
      margin: 0.5rem;
      border-color: ${props => props.theme.color.secondary[400]};
   }
`