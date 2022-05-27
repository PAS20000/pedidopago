import styled from "@emotion/styled";

export const Flex = styled.div`
    display: flex;
    justify-content: space-between ;
    color: ${props => props.theme.color.secondary[400]};
    h5{
        margin-left: 0.2rem;
    }
`

export const Title = styled.h5`
    color: ${props => props.theme.color.secondary[900]};
`