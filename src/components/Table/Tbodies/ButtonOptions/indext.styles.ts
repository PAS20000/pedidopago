import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: transparent;
    color: ${props => props.theme.color.secondary[900]};
    border: none;
    cursor: pointer;
    border-radius: 50%;
    &:hover{
        transition: 1s;
        opacity: 0.5;
    }
    p{
        font-size: 18px;
        margin: 10px;
        margin-top: 5px;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.color.secondary[900]};
    }
    span{
        font-size: 24px;
    }
`

export const ContainerOptions = styled.div`
    @keyframes show {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    animation: show 1s;
    display: flex;
    box-shadow: ${props => props.theme.globalProps.shadow};
    position: absolute;
    z-index: 2;
    background-color: ${props => props.theme.color.secondary[100]};
    border-radius: 10px;
    width: 15rem;
    padding: 20px;
    margin-top: 10px;
    transform: translateX(-16rem);
    .isNotImplemented{
        opacity: 0.5;
        pointer-events: none;
        cursor: none;
    }
`

export const Flex = styled.div`
    display: flex;   
`

export const Grid = styled.div`
    display: grid;
`