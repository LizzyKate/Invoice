import { CaretLeft } from "phosphor-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import InvoiceButton from "../../components/button"
import DeleteInvoice from "../../components/delete"
import InvoiceForm from "../../components/form"
import SideBar from "../../components/sidebar"



export default function Invoice() {
    const { id } = useParams()
    const [edit, setEdit] = useState(false)
    const [CancelInvoice, setCancelInvoice] = useState(false)
    const navigate = useNavigate()


    const showModal = () => {
        setEdit(!edit)
    }
    const showCancelModal = () => {
        setCancelInvoice(!CancelInvoice)
    }
    return (
        <section className="flex h-screen overflow-hidden relative max-h-screen">
            <SideBar />
            <section className={`flex-1 relative ${edit ? "bg-black-600" : "bg-gray-700"}`}>
                <div className="w-3/5 mx-auto py-4">
                    <button className="inline-flex items-center text-xs text-black-200" onClick={() => navigate(-1)}>
                        <span className="mr-2">
                            <CaretLeft size={16} />
                        </span>
                        Go back
                    </button>
                    <div className={`flex items-center p-7 mt-8 rounded-md bg-white justify-between ${edit && "opacity-50"}`} >
                        <div className="flex space-x-4 items-center">
                            <p className="text-xs text-gray-800 font-medium">Status</p>
                            <div className="rounded-md font-medium flex space-x-2 justify-center items-center py-2 text-xs w-20 bg-orange-400 text-orange-300">
                                <div className="w-1 h-1 rounded-full bg-orange-300 "></div>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <InvoiceButton title="Edit" class="bg-gray-100 hover:bg-gray-300 w-20 text-xs font-bold text-purple-100" action={() => { showModal() }} />
                            <InvoiceButton title="Delete" class="bg-orange-200 hover:bg-orange-500 w-20 text-xs text-white font-bold" />
                            <InvoiceButton title="Mark as Paid" class="bg-purple-200 hover:bg-purple-100 w-28 text-xs text-white font-bold" />
                        </div>
                    </div>
                    <div className={`p-4 bg-white mt-8 rounded-md ${edit && "opacity-50"}`}>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-black-200 font-bold text-base"><span className="text-purple-100 font-normal">#</span>{id}</p>
                                <p className="text-xs font-normal text-purple-100 mt-2">Graphic Design</p>
                            </div>
                            <p className="text-right text-xs text-purple-100">19 Union Terrace
                                <br />London
                                <br />E1 3EZ
                                <br />United Kingdom</p>
                        </div>
                        <div className="mt-8">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <th className="text-left text-purple-100 text-xs font-normal">Invoice Date</th>
                                        <th className="text-left text-purple-100 text-xs font-normal">Bill To</th>
                                        <th className="text-left text-purple-100 text-xs font-normal">Sent To</th>
                                    </tr>
                                    <tr className="align-baseline">
                                        <td className="text-black-200 text-base font-bold">21 Aug 2021<br /><br /><p className="font-normal text-purple-100 text-xs">Payment Due</p><p>20 Sep, 2021</p></td>
                                        <td className="text-black-200 text-base font-bold">Alex Grim<br /><p className="text-purple-100 text-xs leading-5">84 Church Way
                                            <br />Bradford
                                            <br />BD1 9PB
                                            <br />United Kingdom</p></td>
                                        <td className="text-black-200 text-base font-bold">alexgrim@mail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 bg-gray-100 p-4 rounded-md">
                            <table className="w-full max-h-12" cellPadding={16} >
                                <tbody>
                                    <tr>
                                        <th className="text-purple-100 text-xs font-normal text-left">Item Name</th>
                                        <th className="text-purple-100 text-xs font-normal">QTY</th>
                                        <th className="text-purple-100 text-xs font-normal">Price</th>
                                        <th className="text-purple-100 text-xs font-normal text-right">Total</th>
                                    </tr>
                                    <tr>
                                        <td className="text-black-200 text-sm font-bold ">Banner Design</td>
                                        <td className="text-center text-purple-100 text-sm">1</td>
                                        <td className="text-center text-purple-100 text-sm">£ 156.00</td>
                                        <td className=" text-black-200 text-sm text-right">£ 156.00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black-200 text-sm font-bold ">Email Design</td>
                                        <td className="text-center text-purple-100 text-sm">1</td>
                                        <td className="text-center text-purple-100 text-sm">£ 200.00</td>
                                        <td className=" text-black-200 text-sm text-right">£ 400.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-black-500 flex items-center justify-between rounded-b-md p-8">
                            <p className="text-xs font-normal text-white">Amount Due</p>
                            <p className="text-2xl text-white font-bold">£ 556.00</p>
                        </div>
                    </div>
                </div>
                {
                    edit && <InvoiceForm title={`Edit ${id}`} label="Cancel" draft={false} class="__width" save="Save Changes" />
                }

            </section>
            {
                CancelInvoice && <DeleteInvoice />
            }

        </section>
    )
}