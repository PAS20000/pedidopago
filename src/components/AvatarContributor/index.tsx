import * as React from 'react'
import NextImage from '../Contracts/NextImage'
import { Flex } from './index.styles'


type TAvatar = {
    name:string
    image:string
    email?:string
    size:string | number
}

const AvatarContributor = ({
    name,
    image,
    email,
    size
} : TAvatar) => {

    return (
        <Flex>
            <NextImage
                src={image}
                alt={`imagem-${name}`}
                width={size}
                height={size}
                className={'Avatar'}
                layout='fixed'
            />
            <div>
                {!email ? 
                    <p className='AvatarName'>
                        {name}
                    </p>
                    :
                    <p className='AvatarNameEmail'>
                        {name} <br />
                        {email}
                    </p>
                }
            </div>
        </Flex>
    )
}

export default AvatarContributor