import styled from '@emotion/styled'

export const Flex = styled.div`
display: flex;
    h3{ 
        margin-right: 10rem;
        width: 12rem;
    }
    .select{
        pointer-events: none;
        text-align: end;
        pointer-events:none;
        border-bottom:solid 2px;
        border-color: #00ad71;
        margin-bottom:10px;
    }
    .default{
        cursor: pointer;
        text-align: end;
        opacity:0.5;
        border-bottom: solid 2px;
        border-color:#000;
        margin-bottom: 10px;
        &:hover{
            transition: 1s;
            color: #00ad71;
            border-color: #00ad71;
            opacity: 1;
        }   
    }
    .hr{
        opacity:0.5;
        border-bottom: solid 2px;
        border-color:#000;
        margin-bottom: 10px;
        width: 100%;
    }
   
`