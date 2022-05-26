import * as React from 'react'

type TReturn = {
   width:number
   height:number
}

const useResposive = () : TReturn => {
    const [ width, setWidth ] = React.useState<number>(0)
    const [ height, setHeight ] = React.useState<number>(0)

    React.useEffect(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, [])

    return {
        width:width,
        height:height,
    }
}

export default useResposive