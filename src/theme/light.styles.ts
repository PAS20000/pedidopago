import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      color?: {
        primary: string
        secondary: string
        tertiary: string
        quartenary: string
        sextenary:string
      }
    }
  }

export const light : Theme = {
    color: {
        primary: '#23D996',
        secondary: '#fff',
        tertiary: '#000',
        quartenary:'#E5E5E5',
        sextenary:'#34423D',
    }
}