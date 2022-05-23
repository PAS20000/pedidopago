import * as React from 'react'

type TCard = {
    children:React.ReactNode
}

const Card = ({
    children
} : TCard) => {


    return(
        <div>
            {children}
        </div>     
    )
}

export default Card