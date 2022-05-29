import * as React from 'react'
import NextImage from '../Contracts/NextImage'
import { Flex, Name } from './index.styles'


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
            <div className='AvatarContainer'>
            <NextImage
                    src={image}
                    alt={`imagem-${name}`}
                    width={size}
                    height={size}
                    className={'Avatar'}
                    layout='fixed'
                />
                <Name>
                    {!email ? 
                        <p className='AvatarName'>
                            {name}
                        </p>
                        :
                        <p className='AvatarName'>
                            {name} <br />
                            <span className='Email'>
                                {email}
                            </span>
                        </p>
                    }
                </Name>
            </div>
        </Flex>
    )
}

export default AvatarContributor