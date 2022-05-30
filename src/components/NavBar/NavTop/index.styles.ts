import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";

export const Container = styled.nav`
    background-color: ${props => props.theme.color.secondary[100]};
    padding: 5px;
    box-shadow: ${props => props.theme.globalProps.shadow};
    display: flex;
    justify-content: space-between;
    p.info{
        display: flex;
        flex-direction: column;
    }

    ${Media(1, 'max')}{ 
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 0px 16px;
        height: 61px;
       
        div.Logo{
          margin-right: 40%;
        }
        p.info{
            display: none;
        }
    }
`

export const Flex = styled.div`
    display: flex;
    padding: 10px;
    p{
        display: grid;
        margin: 10px;
        margin-left: 5px;
        color:${props => props.theme.color.secondary[1000]};
        span{
            color:${props => props.theme.color.secondary[900]};
            font-size: 12px;
        }
        span.user{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 100%;
            color: ${props => props.theme.color.secondary[1000]};
        }
    }
`

export const DefaultAtavar = styled.div`
    background-color: ${props => props.theme.color.primary[900]};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        margin: 12px;
        color: ${props => props.theme.color.secondary[1000]};
        position: absolute;
    }

    ${Media(1, 'max')}{
        width: 32px;
        height: 32px;
        padding: 4px;
        
        p{
            margin: 9px;
        }
    }
    
` 