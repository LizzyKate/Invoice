import { useState } from "react"


type inputProps = {
    label?: string,
    type: string,
    value?: any,
    getValue(word: string): void,
    error: boolean,
    class?: string,
    placeholder?: string
}

export default function InvoiceInput(props: inputProps) {
    const [dirty, setDirty] = useState(false)
    return (
        <div>
            {props.label ?
                <div className="mb-2">
                    <label htmlFor={props.label} className={`${props.class} text-xs font-medium ${props.error && dirty ? 'text-red-100' : ''}`}>{props.label}</label>
                </div> :
                ''}
            <input onFocus={() => setDirty(true)} type={props.type} name={props.label} value={props.value} onInput={(e) => props.getValue((e.target as any).value)} className={`${props.class} border rounded ${props.error && dirty ? 'border-red-100' : ''}`} placeholder={props.placeholder} />
        </div>
    )
}