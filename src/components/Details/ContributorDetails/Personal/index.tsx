import * as React from 'react'
import { Card, Icon } from './index.styles'

type TPersonal = {
    title:string
    text:string
    icon:React.ReactChild
}


const Personal = ({
    title,
    text,
    icon
} : TPersonal) => {

    return(
        <Card> 
            <div>
                <Icon>
                   {icon}
                </Icon>
                <p>
                    <span>
                        {title}
                    </span>
                    <br />
                    {text}
                </p>
            </div>
        </Card>
    )
}

export default Personal