import styled from "styled-components"
import SideBar from "../../components/sidebar"
import Dropdown from "../../components/dropdown"
import InvoiceButton from "../../components/button"
import InvoiceDetail from "../../components/invoice"
import InvoiceForm from "../../components/form"
import { useState } from "react"



const InvoiceData: [] | any[] = [
    // {
    //     id: 'RT3080',
    //     date: 'Due  19 Aug 2021',
    //     name: 'Jensen Huang',
    //     amount: '£ 1,800.90',
    //     status: 'Paid'
    // },
    // {
    //     id: 'RT3080',
    //     date: 'Due  19 Aug 2021',
    //     name: 'Jensen Huang',
    //     amount: '£ 1,800.90',
    //     status: 'Pending'
    // },
    // {
    //     id: 'RT3080',
    //     date: 'Due  19 Aug 2021',
    //     name: 'Jensen Huang',
    //     amount: '£ 1,800.90',
    //     status: 'Draft'
    // }
]


export default function Invoice() {
    const [newInvoice, setNewInvoice] = useState(false)

    const showModal = () => {
        setNewInvoice(!newInvoice)
    }
    return (

        <section className="flex h-screen">
            <SideBar />
            <section className="bg-gray-700 flex-1 relative">
                <div className="w-3/5 mx-auto mt-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <InvoiceHead className="text-black-200">Invoices</InvoiceHead>
                            <p className="text-xs text-gray-400 font-normal">There are {InvoiceData.length === 0 ? 0 : 7} total invoices</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <Dropdown label={'Filter by status'} options={[{ label: 'Draft', value: 'draft' }, { label: 'Pending', value: 'pending' }, { label: 'Paid', value: 'paid' }]} />
                            <InvoiceButton label="New Invoice" title="New Invoice" action={() => { showModal() }} />
                        </div>
                    </div>
                    <InvoiceDetail detail={InvoiceData} />
                    {
                        newInvoice && <InvoiceForm title="New Invoice" />
                    }

                </div>
            </section>
        </section>



    )
}

const InvoiceHead = styled.h1`
    font-size:32px;
`