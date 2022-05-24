import * as React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ContributorsFooter = () => {
    
    return(
        <tr>
            <td>
                <div>
                    <select>
                        <option value="10">
                            10
                        </option>
                    </select>
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

export default ContributorsFooter