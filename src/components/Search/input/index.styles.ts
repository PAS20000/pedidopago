import styled from "@emotion/styled";


export const Container = styled.div`
  margin-top: 56px;
  margin-bottom: 40px;
`

export const InputSearch = styled.input`
    padding: 0.8rem 3rem;
    width: 90%;
    border: 2px solid ${props => props.theme.color.secondary[700]};
    border-radius: 8px; 
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    font-family: 'Poppins';
    color: ${props => props.theme.color.secondary[900]};
    ::placeholder{
        color: ${props => props.theme.color.secondary[900]};
    }
`

export const Icon = styled.span`
    position: absolute;
    margin: 12px;
    margin-left: 20px;
    font-size: 24px;
    pointer-events: none;
    color:  ${props => props.theme.color.secondary[900]};
`

export const LabelContainer = styled.div`
    padding: 6px;
    margin-left: 5px;
    pointer-events: none;
    
    label{
        width: 5rem;
        text-align: center;
        font-weight: bold;
        font-size: 0.7rem;
        color: rgba(0,0,0, 0.5);
        position: absolute;
        z-index: 3;
        background-color: ${props => props.theme.color.secondary[100]};
    }
`