import styled from "@emotion/styled";


export const ContainerTr = styled.tr`
p.Avatar.Name{
    width: 113px;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 140%;
    margin-top: 5px;
}
   
td.inactive{
    color: ${props => props.theme.color.secondary[800]};
    img{
        opacity: 0.5;
     }           
}
`