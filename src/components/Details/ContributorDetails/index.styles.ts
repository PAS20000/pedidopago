import styled from "@emotion/styled";
import { Media } from "../../../utils/breakPoints";



export const ContainerInfo = styled.div`
    display: flex;
    ${Media(1, 'max')}{
        display: grid;
        padding: 20px;
    }
`

export const Avatar = styled.div`
    
    div.AvatarContainer{
        margin: 15px;
    }
    p.Avatar.Name {
        ${Media(1, 'max')}{
            margin-left: 5px;
        }
        display: grid;
        width: 168px;
        height: 27px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        align-items: center;
        color: ${props => props.theme.color.secondary[1000]};
        margin-left: 24px;
        span.Email{
            width: 213px;
            height: 17px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 120%;
            align-items: center;
            display: flex;
            color: ${props => props.theme.color.secondary[900]};
        }
    }
`

export const ContainerOrganizations = styled.div`
    ${Media(1, 'max')}{        
        margin-left: 10px;
        margin-top: 0;
        padding: 0;
        width: 321px;
    }
   
    border: solid 2px;
    border-color: ${props => props.theme.color.secondary[700]};
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 24px;
    background: ${props => props.theme.color.secondary[100]};
    border-radius: 8px;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    ${Media(1, 'max')}{
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    text-align: start;
    margin-left: 24px;
    color: ${props => props.theme.color.secondary[1000]};
`