import styled from '@emotion/styled'

export const Flex = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    display: flex;
    .select{
        border-bottom: 2px solid ${props => props.theme.color.primary[1000]};
    }
    .default{
        border-color: ${props => props.theme.color.secondary[600]};
        color: ${props => props.theme.color.secondary[800]};
        border-bottom: 2px solid;
        cursor: pointer;
    }
    .default.end{
        width: 100%;
        pointer-events: none;
    }
    h3{
        width: 196px;
    }
`