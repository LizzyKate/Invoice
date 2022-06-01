import { useState } from "react"


type inputProps = {
    label?: string,
    type: string,
    value?: any,
    getValue(word: string): void,
    error?: boolean,
    class?: string,
    placeholder?: string
}

export default function InvoiceInput(props: inputProps) {
    const [dirty, setDirty] = useState(false)
    return (
        <div>
            {props.label ?
                <div className={`mb-2 ${props.class}`}>
                    <label htmlFor={props.label} className={` text-gray-500 text-xs font-medium ${props.error && dirty ? 'text-red-100' : ''}`}>{props.label}</label>
                </div> :
                ''}
            <input onFocus={() => setDirty(true)} type={props.type} name={props.label} value={props.value} onInput={(e) => props.getValue((e.target as any).value)} className={`border-gray-300 w-full py-2 px-5 text-black-200 border rounded focus:border-purple-200 focus:outline-none ${props.error && dirty ? 'border-red-100' : ''}`} placeholder={props.placeholder} />
        </div>
    )
}