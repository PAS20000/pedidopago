import styled from "@emotion/styled";

export const ContainerButton = styled.div`
   
   button{
        display: flex;
        justify-content: center;
        padding: 10px;
        margin-left: 20px;
        width: 90%;
        color: ${props => props.theme.color.secondary[900]};
        border: solid 2px ${props => props.theme.color.primary[1000]};
        background-color: ${props => props.theme.color.secondary[100]};
        border-radius: 8px;

        span.ButtonTitle{
            width: 50px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            color: #34423D;
            margin: 2px;
        }

        span.icon{
            color: ${props => props.theme.color.primary[1000]};
            font-size: 26px;
        }
   }
`