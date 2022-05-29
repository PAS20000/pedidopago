import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";

export const Container = styled.main`
   margin-left: 8%;
   padding-top: 51px;
   margin-bottom: 51px;

   ${Media(1)}{
      margin-left: -10px;
      padding: 1px;
   }
`