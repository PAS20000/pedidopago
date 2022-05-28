import * as React from 'react'
import { ContainerTr } from './index.styles'

type TFirstOrEnd = {
    title:string
    index:number
    array:Array<string>
}
type THead = {
    titles:Array<string>
    classHead:string
}
const TableHead = ({
    titles,
    classHead
} : THead) => {

    const firstOrEnd = ({
        title,
        index, 
        array
    } : TFirstOrEnd ) : string => {
       
        if(index + 1 === 1){
            return `${title} first ${classHead}`
        }
        if(index + 1 === array.length){
            return `${title === '' && 'titleNull'} end ${classHead}`
        }
        else {
            return `${title} ${classHead}`
        }
    }

    return(
        <ContainerTr>
            {titles.map((title, index, array) => 
                <th key={index}>
                    <h4 className={firstOrEnd({title, index, array})}>
                        {title}
                    </h4>
                </th>
            )}
        </ContainerTr>   
    )
}

export default TableHead