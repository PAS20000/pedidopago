import * as React from 'react'
import { ContainerButton } from './index.styles'

type TButton = {
    children?:React.ReactNode
    icon?:React.ReactChild
    onClick?:React.MouseEventHandler
}

const Button = ({
    children,
    icon,
    onClick
} : TButton) => {


    return(
        <ContainerButton onClick={onClick}>
            <button>
                <span className='icon'>
                    {icon}
                </span>
                <span className='ButtonTitle'>
                    {children}
                </span>
            </button>
        </ContainerButton>
    )
}

export default Button