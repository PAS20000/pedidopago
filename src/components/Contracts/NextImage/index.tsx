import * as React from 'react'
import Image from 'next/image'
import { ContainerImg } from './index.styles'


export type TNextImage = {
    src:string
    width?:string | number
    height?:string | number
    alt:string
    className?:string
    layout?:'fixed' | 'fill' | 'intrinsic' | 'responsive'
}

const NextImage = ({ 
    src, 
    width, 
    height, 
    alt, 
    className, 
    layout 
} : TNextImage) => {

    return (
        <ContainerImg className='NextIMG'>
            <Image 
                src={src} 
                width={width} 
                height={height} 
                alt={alt} 
                className={className} 
                layout={layout} 
            />
        </ContainerImg>
    )
}

export default NextImage