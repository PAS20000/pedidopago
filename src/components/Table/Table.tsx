import * as React from 'react'
import { TData } from '../../../pages'
import NextImage from '../Contracts/NextImage/NextImage'

type TTable = {
    tableHead?:React.ReactNode
    data:TData[]
}

const Table = ({
    tableHead,
    data
} : TTable) => {


    return(
        <table>
            <thead>
                <tr>
                    {tableHead}
                </tr>
            </thead>
            <tbody>
                {data.map(item => 
                <tr key={item.agent_id}>
                    <td>
                        <NextImage 
                            src={item.image}
                            width={'50px'}
                            height={'50px'}
                            alt={`imagem-${item.name}`}
                        />
                        {item.name}
                    </td>
                    <td>
                        {item.department}
                    </td>
                    <td>
                        {item.role}
                    </td>
                    <td>
                        {item.branch}
                    </td>
                    <td>
                        {item.status}
                    </td>
                </tr>)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    )
}

export default Table