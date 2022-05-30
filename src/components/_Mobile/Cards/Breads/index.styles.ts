import styled from "@emotion/styled";

export const ContainerBread = styled.div`
@keyframes show {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
    display: grid;
    
    div.categorias{
        animation: show 1s;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px 0px 40px;
        gap: 10px;
        position: relative;
        width: 328px;
        height: 241px;
        background: #FFFFFF;
        box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
        border-radius: 12px 12px 0px 0px;
    }
    button{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 316px;
        height: 56px;
        background: #FFFFFF;
        border: 2px solid ${props => props.theme.color.secondary[700]};
        border-radius: 8px; 
        color:  ${props => props.theme.color.secondary[900]};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
    }

    h2{
        width: 103px;
        height: 27px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #34423D;
        margin: 15px;
    }
    div.selectBread{
            margin: 15px;
            width: 122px;
            height: 24px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: ${props => props.theme.color.secondary[1000]};
        }

    span{
        font-size: 20px;
        color: #587169;
    }

`