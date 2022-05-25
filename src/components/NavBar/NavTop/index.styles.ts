import styled from "@emotion/styled";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    padding: 15px;
    box-shadow: 0 0 0.4em rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
`

export const Flex = styled.div`
    display: flex;
    p{
        margin: 10px;
        margin-left: 5px;
        color:${props => props.theme.color.secondary[1000]};
        span{
            color:${props => props.theme.color.secondary[900]};
            font-size: 12px;
        }
    }
`