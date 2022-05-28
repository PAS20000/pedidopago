import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import LabelText from '../../LabelText'
import { Container, Icon, InputSearch, LabelContainer } from './index.styles'

type TInput = {
    onChange:React.ChangeEventHandler<HTMLInputElement>
    placeholder:string
    value:string
}

const Input = ({
    onChange,
    placeholder,
    value
} : TInput) => {
   
    return(
        <Container>
            <LabelText className='search'>
                Pesquisar por
            </LabelText>
            <div>
                <Icon>
                    <FiSearch />
                </Icon>
                <InputSearch 
                    type="text" 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    value={value}
                />
            </div>
        </Container>
    )
}

export default Input