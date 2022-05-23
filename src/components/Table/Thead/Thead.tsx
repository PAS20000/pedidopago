import * as React from 'react'

type TThread = {
    children?:React.ReactNode
}

const Thead = ({
    children
} : TThread) => {
    
    
    return(
        <thead>
            <tr>
                {children}
            </tr>   
        </thead>   
    )
}

export default Thead