import styled from "@emotion/styled";

export const Flex = styled.div`
    display: flex;
    justify-content: space-between ;
    color: ${props => props.theme.color.secondary[400]};
    span{
        margin: 10px;
        padding: 10px;
    }
    .inactive{
        opacity: 0.5;
    }
`

export const Grid = styled.div`
display: grid;
`

export const Title = styled.h5`
    color: ${props => props.theme.color.secondary[900]};
`

export const ContainerInfo = styled.div`
    padding: 0.5rem;
    div{
        display: flex;
        justify-content: space-between;
    }
`

export const ContainerStatus = styled.label`
    padding: 50px;
`

export const AvatarName = styled.div`
    display: flex;
    h5{
        padding: 1rem;
    }
`