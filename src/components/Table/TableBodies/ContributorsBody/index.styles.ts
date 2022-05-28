import styled from "@emotion/styled";


export const ContainerTr = styled.tr`
p.AvatarName{
    width: 113px;
    height: 34px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
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