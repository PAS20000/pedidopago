import styled from "@emotion/styled";


export const ContainerStyle = styled.div`
   margin-left: 20%;
   background-color: ${props => props.theme.color.secondary[100]};
   margin-top: 0;
   padding: 1rem;
   box-shadow: ${props => props.theme.globalProps.shadow};
   border-radius: 10px;
`