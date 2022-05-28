import styled from "@emotion/styled";

export const ContainerOrg = styled.div`
    margin: 0px 20px 20px;

    div.Drop{
        padding: 15px;
        background: #F5FAF8;
        border: 2px solid #CAD6D1;
        border-radius: 8px;
        div{
            display: flex;
            justify-content: space-between;
            span.option{
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 150%;
                color: ${props => props.theme.color.secondary[900]};
            }
            span.icon{
               font-size: 18px;
            }
        }
    }
`