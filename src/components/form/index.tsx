import { useState } from "react"
import InvoiceButton from "../button"
import InvoiceDate from "../date"
import InvoiceInput from "../input"
import InvoiceItems from "../list"
import InvoiceSelect from "../select"


type formProps = {
    title: string,
    label: string,
    draft: boolean,
    class?: string,
    save: string
}

export default function InvoiceForm(props: formProps) {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState("")
    const [postCode, setPostCode] = useState("")
    const [country, setCountry] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [clientCity, setClientCity] = useState("")
    const [clientPostCode, setClientPostCode] = useState("")
    const [clientCountry, setClientCountry] = useState("")
    const [date, setDate] = useState("")
    const [paymentTerms, setPaymentTerms] = useState("")

    return (
        <section className={`py-10 px-6 bg-white absolute h-screen max-h-screen  top-0  left-0 rounded-tr ${props.class}`}>
            <h2 className="text-black-200 font-bold text-xl">{props.title}</h2>

            <form className="mt-12">
                <div style={{ maxHeight: "calc(100vh - 200px)", overflowY: "scroll" }}>
                    <h3 className="text-purple-300 text-xs mb-6">Bill From</h3>
                    <InvoiceInput label="Street Address" getValue={(value: string) => { setAddress(value) }} type="text" />
                    <div className="flex justify-between items-center space-x-4 mt-4">
                        <InvoiceInput label="City" type="text" getValue={(value: string) => { setCity(value) }} />
                        <InvoiceInput label="Post Code" type="text" getValue={(value: string) => { setPostCode(value) }} />
                        <InvoiceInput label="Country" type="text" getValue={(value: string) => { setCountry(value) }} />
                    </div>
                    <h3 className="text-purple-300 text-xs my-6">Bill To</h3>
                    <InvoiceInput label="Client's Name" getValue={(value: string) => { setClientName(value) }} type="text" />
                    <InvoiceInput label="Client's Email" class="mt-4" getValue={(value: string) => { setClientEmail(value) }} type="email" />
                    <InvoiceInput label="Street Address" class="mt-4" getValue={(value: string) => { setClientAddress(value) }} type="text" />
                    <div className="flex justify-between items-center space-x-4 mt-4">
                        <InvoiceInput label="City" type="text" getValue={(value: string) => { setClientCity(value) }} />
                        <InvoiceInput label="Post Code" type="text" getValue={(value: string) => { setClientPostCode(value) }} />
                        <InvoiceInput label="Country" type="text" getValue={(value: string) => { setClientCountry(value) }} />
                    </div>
                    <div className="flex justify-between space-x-4 items-center mt-4">
                        <InvoiceDate label="Invoice Date" getValue={(value: string) => { setDate(value) }} />
                        <InvoiceSelect options={[{ label: "Net 1 Day", value: 'Net 1 Day' }, { label: "Net 7 Days", value: "Net 7 Days" }, { label: "Net 14 Days", value: "Net 14 Days" }, { label: "Net 30 Days", value: "Net 30 Days" }]} label="Payment Terms" getValue={(value: string) => { setPaymentTerms(value) }} />
                    </div>
                    <InvoiceItems />
                </div>
                <div className={`flex items-center mt-6 ${props.draft ? "justify-between" : "justify-end space-x-4"}`}>
                    <InvoiceButton title={props.label} type="button" class="bg-gray-100 w-24 text-gray-500 text-xs" />
                    <div className="flex justify-between items-center space-x-4">
                        {
                            props.draft && <InvoiceButton title="Save as Draft" type="button" class="bg-black-500 text-gray-400 w-32 text-xs" />
                        }

                        <InvoiceButton title={props.save} type="submit" class="bg-purple-300 text-white w-32 text-xs" />
                    </div>
                </div>
            </form>
        </section>
    )
}