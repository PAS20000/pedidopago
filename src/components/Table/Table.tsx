import * as React from 'react'
import { TData } from '../../../pages'
import NextImage from '../Contracts/NextImage/NextImage'
import { AiOutlineMore } from 'react-icons/ai'

type TTable = {
    children?:React.ReactNode
    data:TData[]
    title?:string
}

const Table = ({
    children,
    data,
    title
} : TTable) => {


    return(
        <>
            <h2>
                {title}
            </h2>
            <table style={{width:'100%', borderTop:'solid 1px'}}>
                <thead>
                    <tr>
                        {children}
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
                                {item.status ?? 'inactive'}
                            </td>
                            <td>
                                <button>
                                    <AiOutlineMore />
                                </button>
                            </td>
                        </tr>)}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </>
    )
}

export default Table