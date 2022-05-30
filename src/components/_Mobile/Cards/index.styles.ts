import styled from "@emotion/styled";


export const CardBody = styled.div`
    flex-direction: column;
    padding: 10px;
    border-radius: 8px;
    border:solid 2px  ${props => props.className === 'open' ? props.theme.color.primary[900] : props.theme.color.secondary[700] };

    margin-top: 10px;
`


export const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
`

export const AvatarContainer = styled.div`
   display: flex;

   opacity: ${props => props.className === 'inactive' ? 0.5 : 1};
   p{
      margin: 0;
      margin-left: 8px;
      text-align: start;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 140%;
      margin-top: 8px;
   }
`

export const ContainerInfo = styled.div`
   
`

export const ContainerInfoBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   
    h2{
        width: 91px;
        height: 17px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 140%;
        color: #587169;
    }

    p{
        width: 88px;
        height: 17px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        color: #587169;
    }
`

export const Title = styled.h2`

    width: 196px;
    height: 17px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #587169;
`

export const ContainerOptions = styled.div`
@keyframes show {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
animation: show 1s;
background-color: ${props => props.theme.color.secondary[100]};
border-radius: 10px;
width: 240px;
padding: 20px;
box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
border-radius: 8px;
position: absolute;
z-index: 2;
transform: translate(10%, -200%);
`