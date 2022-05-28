import styled from "@emotion/styled"

export const ContainerTr = styled.tr`
th{
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-align: start; 
    h4{
        border-top: solid 1px;
        border-bottom: solid 1px;
        margin: -1px;
        padding: 15px;
        font-weight: bold;
        margin-bottom: 5px;
        border-color: ${props => props.theme.color.secondary[800]};
        height: 17px;
    }
    h4.nome.completo.contributors{
        width: 196px;
    }
    h4.departamento.contributors{
        width: 124px;
    }
    h4.cargo.contributors{
        width: 96px;
    }
    h4.unidade.contributors{
        width: 142px;
    }
    h4.status.contributors{
        width: 182px;
    }
    h4.first{
        border-left: solid 1px;
        border-top-left-radius: 10px;
    }  
    h4.end{
        border-right: solid 1px;
        border-top-right-radius: 10px;
        text-indent: 1rem;
    }
}
`

