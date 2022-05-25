import { useState } from "react";



type dateProps = {
    label?: string,
    value?: any
    getValue(word: string): void,
    error?: boolean,
    class?: string,
}

export default function InvoiceDate(props: dateProps) {
    const [dirty, setDirty] = useState(false)
    return (
        <div>
            {props.label ?
                <div className="mb-2">
                    <label htmlFor={props.label} className={`${props.class} text-xs font-medium ${props.error && dirty ? 'text-red-100' : ''}`}>{props.label}</label>
                </div> :
                ''}
            <input onFocus={() => setDirty(true)} type='date' value={props.value} className={`${props.class} p-2 border rounded ${props.error && dirty ? 'border-red-100' : ''}`} placeholder="22 Aug 2020" />
        </div>
    )
}

