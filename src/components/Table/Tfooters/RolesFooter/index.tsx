import * as React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const RolesFooter = () => {
    
    return(
        <tr>
            <td>
                <div>
                    <button>
                        <AiOutlineArrowLeft/>
                    </button>
                    <h3>
                        1 de 10
                    </h3>
                    <button>
                        <AiOutlineArrowRight/>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default RolesFooter