import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";


export const ContainerStyle = styled.div`
   transform: translate(25vh, 24px);
   background-color: ${props => props.theme.color.secondary[100]};
   margin-top: 0;
   padding: 40px 24px;
   box-shadow: ${props => props.theme.globalProps.shadow};
   border-radius: 8px;
   border: ${props => props.className && 'solid 1px'};
   width: 75%;

   
   ${Media(1, 'max')}{
      gap: 40px;
      width: 348px;
      margin: 10px;
      margin-right: 15px;
   }
`