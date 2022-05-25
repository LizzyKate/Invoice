
import { useState } from "react"
import styled from "styled-components"
import { CaretDown } from "phosphor-react"



type dropDownProps = {
    label?: string
    class?: string,
    placeholder?: string,
    value?: any,
    error?: boolean,
    options: {
        label: string, value: string
    }[],

}

export default function InvoiceDropDown(props: dropDownProps) {
    const [dirty, setDirty] = useState(false)
    return (
        <div>
            {props.label ?
                <div className="mb-2">
                    <label htmlFor={props.label} className={`${props.class} text-xs font-medium ${props.error && dirty ? 'text-red-100' : ''}`}>{props.label}</label>
                </div> :
                ''}
            <div className="relative h-12 w-60 m-8">
                <StyledSelect title="Payment" className={`${props.class} p-2 border w-full text-sm font-medium h-full rounded border-gray-400`} onFocus={() => setDirty(true)}>
                    <option value='0' selected disabled>Select car:</option>
                    {
                        props.options.map((e, i) => {
                            return (
                                <option key={i} value={e.value}>{e.label}</option>
                            )
                        })
                    }


                </StyledSelect>
                <span className="absolute top-3.5 right-3">
                    <CaretDown size={16} />
                </span>
            </div>


        </div>
    )
}

const StyledSelect = styled.select`
-webkit-appearance: none;
-moz-appearance: none;
`