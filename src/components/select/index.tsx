
import { useState } from "react"
import styled from "styled-components"
import { CaretDown } from "phosphor-react"



type dropDownProps = {
    label?: string
    class?: string,
    placeholder?: string,
    value?: any,
    error?: boolean,
    getValue(word: string): void,
    options: {
        label: string, value: string
    }[],

}

export default function InvoiceSelect(props: dropDownProps) {
    const [dirty, setDirty] = useState(false)
    return (
        <div className="w-full relative">
            {props.label ?
                <div className="mb-2">
                    <label htmlFor={props.label} className={`text-gray-500  text-xs font-medium ${props.error && dirty ? 'text-red-100' : ''}`}>{props.label}</label>
                </div> :
                ''}

            <StyledSelect title="Payment" className={`py-3 px-5 border w-full text-sm font-medium  rounded border-gray-300 focus:border-purple-200 focus:outline-none `} onFocus={() => setDirty(true)}>
                <option value='0' selected disabled>{props.label}</option>
                {
                    props.options.map((e, i) => {
                        return (
                            <option key={i} value={e.value}>{e.label}</option>
                        )
                    })
                }


            </StyledSelect>
            <span className="absolute right-3" style={{ top: "46px" }}>
                <CaretDown size={16} />
            </span>



        </div>
    )
}

const StyledSelect = styled.select`
-webkit-appearance: none;
-moz-appearance: none;
`