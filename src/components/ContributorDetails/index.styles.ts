import styled from "@emotion/styled";

export const Card = styled.div`
    background-color: ${props => props.theme.color.secondary[300]};
    padding: 0rem 0.5rem 0rem 0.5rem;
    width: 20rem;
    margin-left: 0.5rem;
    border: solid 2px ${props => props.theme.color.secondary[400]};
    border-radius: 10px;
    div{
        display: flex;
    }
    p{
        font-size: 0.8rem;
        color: ${props => props.theme.color.secondary[900]};
        font-weight: bold;
        span{
            font-weight: normal;
            text-transform: capitalize;
        }
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    justify-content:space-around ;
`

export const Icon = styled.div`
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 50%;
    text-align: center;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    font-size: 18px;
    background-color: ${props => props.theme.color.secondary[400]};
    svg{
        padding: 0.6rem;
    }
`

export const Avatar = styled.div`
 p.AvatarNameEmail{
        margin-left: 1rem;
        margin-top: 1rem;
    }
`