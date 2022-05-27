import * as React from 'react'
import NextImage from '../Contracts/NextImage'
import { Flex } from './index.styles'


type TAvatar = {
    name:string
    image:string
    email?:string
}

const AvatarContributor = ({
    name,
    image,
    email
} : TAvatar) => {

    return (
        <Flex>
            <NextImage
                src={image}
                alt={`imagem-${name}`}
                width={40}
                height={40}
                className={'Avatar'}
                layout='fixed'
            />
            {!email ? 
                <p>
                    {name}
                </p>
                :
                <p>
                    {name} <br />
                    {email}
                </p>
            }
        </Flex>
    )
}

export default AvatarContributor