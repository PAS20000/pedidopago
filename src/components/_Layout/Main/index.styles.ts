import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";

export const Container = styled.main`
   padding-top: 51px;
   margin-bottom: 51px;
   transform: translate(13vh);

   ${Media(0, 'min')}{
      transform: translate(50vh);
   }
   
`