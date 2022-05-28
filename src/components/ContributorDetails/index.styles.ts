import styled from "@emotion/styled";



export const ContainerInfo = styled.div`
    display: flex;
    justify-content:space-around ;
`

export const Avatar = styled.div`
 p.AvatarNameEmail{
        margin-left: 1rem;
        margin-top: 1rem;
    }
`

export const ContainerOrganizations = styled.div`
    padding: 1.5rem;
    margin: 1rem;
    border: solid 2px ${props => props.theme.color.secondary[400]};
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`