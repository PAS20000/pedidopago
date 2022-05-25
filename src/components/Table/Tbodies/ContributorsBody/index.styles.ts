import styled from "@emotion/styled";

export const Flex = styled.div`
    display: flex;
    p{
        font-weight: bold;
        flex-wrap: wrap;
        margin-left: 5px;
    }
`

export const LabelTd = styled.td`
    text-align: center;
    font-weight: bolder;
   
   .active{
        background-color: ${props => props.theme.color.primary[300]};
        border-radius: 20px;
        padding: 5px;
        width: 90%;
   }
   .inactive{
       background-color: ${props => props.theme.color.secondary[300]};
       border-radius: 20px;
       padding: 5px;
       width: 90%;
   }
`