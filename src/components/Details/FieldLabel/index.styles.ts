import styled from "@emotion/styled";

export const ContainerOrg = styled.div`
    margin: 0px 20px 20px;

    div.Drop{
        padding: 15px;
        background: #F5FAF8;
        border: solid 2px ${props => props.theme.color.secondary[500]};
        border-radius: 8px;
        div{
            display: flex;
            justify-content: space-between;
            span.option{
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 150%;
                text-transform: capitalize;
                color: ${props => props.theme.color.secondary[900]};
            }
            span.icon{
               font-size: 18px;
               color: ${props => props.theme.color.secondary[900]};
            }
        }
    }
`