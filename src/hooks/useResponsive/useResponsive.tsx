import * as React from 'react'

type TReturn = {
   width:number
   height:number
}

const useResposive = () : TReturn => {
    const [ width, setWidth ] = React.useState<number>(0)
    const [ height, setHeight ] = React.useState<number>(0)

    React.useEffect(() => {
      
    }, [])

    console.log({
      width,
      height,
    })

    return {
        width,
        height,
    }
}

export default useResposive