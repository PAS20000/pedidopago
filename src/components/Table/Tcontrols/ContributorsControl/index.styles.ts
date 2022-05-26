import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color:${props => props.theme.color.secondary[400]};
    span{
        display: flex;
        select{
            color:${props => props.theme.color.secondary[400]};
            border: solid 2px;
            text-align: center;
            margin: 12px;
            margin-left: 20px;
            border-radius: 10px;
            width: 70px;
            height: 35px;
        }
    }
`