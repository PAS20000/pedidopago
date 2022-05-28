import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color:${props => props.theme.color.secondary[400]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding: 10px;
    h4{
        width: 229px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;

        color: ${props => props.theme.color.secondary[900]};
    }
`

export const SelectContainer = styled.div`
        display: flex;
        select{
            outline: none;
            color:${props => props.theme.color.secondary[900]};
            border: solid 2px;
            padding: 8px;
            border: 2px solid ${props => props.theme.color.secondary[400]};
            border-radius: 8px;
            height: 35px;
            width: 70px;
            margin-top: 15px;
            margin-left: 10px;
        }
`