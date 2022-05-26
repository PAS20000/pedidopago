import styled from "@emotion/styled";
import { Media } from "../../utils/breakPoints";

export const Container = styled.main`
 ${Media(1)}{
    width: 100vh;
  }
  
  background-color:${props => props.theme.color.secondary[300]};
  padding: 6%;
`