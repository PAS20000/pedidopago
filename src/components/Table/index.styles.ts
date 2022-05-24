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
    width: 100%;
    border-collapse: collapse;
    tr{
        color: ${props => props.theme.color.sextenary};
        text-transform: capitalize;
        animation: show 1s;
    }
    td{
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        padding: 10px;
        
    }
    th{
        text-align: start;
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
`