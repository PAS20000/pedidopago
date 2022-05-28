import styled from "@emotion/styled";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    padding: 5px;
    box-shadow: ${props => props.theme.globalProps.shadow};
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

export const DefaultAtavar = styled.div`
    background-color: ${props => props.theme.color.primary[300]};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    p{
       text-align: end;
       padding: 1px;
    }
    
` 