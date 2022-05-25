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
        font-size: 18px;
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
    transform: translateX(-15rem);
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