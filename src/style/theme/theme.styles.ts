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
      globalProps?:{
        shadow:string
      }
      color?: {
        primary:TVariants
        secondary: TVariants
      }
    }
  }


export const cssConfig : Theme = {
  globalProps:{
    shadow:'0 0 0.5em rgba(0,0,0,0.2)',
  },
}

export const light : Theme = {
    ...cssConfig,
    color: {
        primary: {
          1000:'#22E0A1',
          900:'#B5F1DD',
        },
        secondary: {
          1000:'#34423D',
          900:'#587169',
          800:'#A3B8B0',
          700:'#CAD6D1',
          600:'#EAEFED',
          100:'#fff',
        },
    }
}