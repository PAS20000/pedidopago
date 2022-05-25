import '@emotion/react'
import { Theme } from '@emotion/react'

type TVariants = {
  1000?:string
  900?:string
  800?:string
  700?:string
  600?:string
  500?:string
  400?:string
  300?:string
  200?:string
  100?:string
}

declare module '@emotion/react' {
    export interface Theme {
      color?: {
        primary:TVariants
        secondary: TVariants
      }
    }
  }

export const light : Theme = {
    color: {
        primary: {
          1000:'#23D996',
          300:'#BBF2DE'
        },
        secondary: {
          1000:'#000',
          900:'#34423D',
          400:'#A3B8B0',
          300:'#EAEFED',
          100:'#fff',
        },
    }
}