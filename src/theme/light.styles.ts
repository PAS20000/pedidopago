import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      color?: {
        primary: string,
        secondary: string,
        tertiary: string,
        bg: string,
        text:string
      }
    }
  }

export const light : Theme = {
    color: {
        primary: '#23D996',
        secondary: '',
        tertiary: '#000',
        bg:'#F8FAF9',
        text:'#34423D'
    }
}