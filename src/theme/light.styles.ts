import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      color?: {
        primary: '#00ad71',
        secondary: '',
        tertiary: '#000',
        bg:''
      }
    }
  }

export const light : Theme = {
    color: {
        primary: '#00ad71',
        secondary: '',
        tertiary: '#000',
        bg:''
    }
}