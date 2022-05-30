import styled from "@emotion/styled";



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
    position: absolute;
    z-index: 2;
    background-color: ${props => props.theme.color.secondary[100]};
    border-radius: 10px;
    width: 240px;
    transform: translateX(-240px);
    padding: 20px;
    box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
    border-radius: 8px;
`