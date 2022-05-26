import styled from '@emotion/styled'

export const Flex = styled.div`
display: flex;
    .contributors{
        margin-right: 5rem;
        width: 12rem;
    }
    .roles{
        margin-right: 5rem;
        width: 8rem;
    }
    .select{
        pointer-events: none;
        text-align: end;
        pointer-events: none;
        border-bottom: solid 2px;
        border-color: ${props => props.theme.color.primary[1000]};
        color: ${props => props.theme.color.primary[1000]};
        margin-bottom: 10px;
        .contributors{
            color: ${props => props.theme.color.secondary[1000]};
        }
        .roles{
            color: ${props => props.theme.color.secondary[1000]};
        }
    }
    .default{
        cursor: pointer;
        text-align: end;
        border-bottom: solid 2px;
        color: ${props => props.theme.color.secondary[300]};
        margin-bottom: 10px;
        &:hover{
            transition: 1s;
            border-color: ${props => props.theme.color.primary[1000]};
        }
        .contributors{
            color: ${props => props.theme.color.secondary[400]};
        }
        .roles{
            color: ${props => props.theme.color.secondary[400]};
        }
    }
    .hr{
        border-bottom: solid 2px;
        border-color: ${props => props.theme.color.secondary[300]};
        margin-bottom: 10px;
        width: 100%;
    }
`