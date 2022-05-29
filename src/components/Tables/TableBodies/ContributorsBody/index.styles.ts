import styled from "@emotion/styled";


export const ContainerTr = styled.tr`
p.Avatar.Name{
    width: 326.4px;
    height: 96px;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 140%;
    margin: 0;
}
td.inactive{
    color: ${props => props.theme.color.secondary[800]};
    img{
        opacity: 0.5;
     }           
}
`