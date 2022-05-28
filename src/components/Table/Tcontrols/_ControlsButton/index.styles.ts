import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    h3{
        color: ${props => props.theme.color.secondary[900]};
        width: 51px;
        height: 24px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }
    button{
        margin: 12px;
        width: 45px;
        height: 35px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px 0px 0px 10px;
        background-color: transparent;
        border: solid 1px;
        color: ${props => props.theme.color.secondary[900]};
        &:hover{
            transition: 1s;
            color: ${props => props.theme.color.secondary[1000]};
        }
    }

    button.next{
        border-radius: 0px 10px 10px 0px;
    }
`