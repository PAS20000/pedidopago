import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    &:hover{
        transition: 1s;
        opacity: 0.5;
    }

    p{
        margin-top: 5px;
    }
`

export const ContainerOptions = styled.div`
    display: grid;
    box-shadow: 0 0 0.4em rgba(0,0,0,0.5);
    position: absolute;
    z-index: 2;
    background-color: ${props => props.theme.color.secondary[100]};
    border-radius: 10px;
    width: 16rem;
    padding: 20px;
    transform: translateX(-16rem);
    .isNotImplemented{
        opacity: 0.5;
        pointer-events: none;
        cursor: none;
    }
`

export const Flex = styled.span`
    display: flex;
    
`