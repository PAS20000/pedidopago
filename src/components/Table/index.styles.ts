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
    tr.inactive{
        td.inactive{
            opacity: 0.5;
        }
    }
    tr{
        text-transform: capitalize;
        animation: show 1s;
    }
    td{
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        padding: 20px;
        p{
            margin-left:5px;
        }
    }
    th{
        text-align: start;
        color: ${props => props.theme.color.secondary[500]};

        h4{
            border-color: ${props => props.theme.color.secondary[300]};
            border-top: solid 1px;
            border-bottom: solid 1px;
            margin: -1px;
            padding: 20px;
            opacity: 0.6;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .first{
            border-left: solid 1px;
            border-top-left-radius: 10px;
        }  
        .last{
            border-right: solid 1px;
            border-top-right-radius: 10px;
        }
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