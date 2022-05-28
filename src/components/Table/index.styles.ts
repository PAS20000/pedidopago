import styled from "@emotion/styled";

export const ContainerTable = styled.table`
 @keyframes show {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    font-size: 12px;
    color: ${props => props.theme.color.secondary[900]};
    border-collapse: collapse;
    width: 100%;
    tr{
        text-transform: capitalize;
        animation: show 1s;
    }
    td{
        border-bottom: solid 1px #EAEFED;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        padding: 5px;
    }
`

export const Title = styled.h2`
    @keyframes show {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    animation: show 1s;
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-align: start;
    color: ${props => props.theme.color.secondary[1000]};
`

export const ContainerRoles = styled.div`
    display: flex;
    justify-content: end;
`