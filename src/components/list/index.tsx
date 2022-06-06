import { Trash } from "phosphor-react"
import { useState, useEffect } from "react"
import InvoiceButton from "../button"

// type listProps = {
//     list: { name: string, qty: string, price: string, total: string }[]
// }

export default function InvoiceItems() {

    interface listProps {
        name: string,
        qty: string,
        price: string,
        total: number
    }

    const [items, setItems] = useState<listProps[]>([])
    const [name, setName] = useState<string>("")
    const [qty, setQty] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [total, setTotal] = useState<number>(0)
    console.log(items)

    // let totalPrice = parseInt(qty) * parseInt(price)
    const itemList: listProps = {
        name: name,
        qty: qty,
        price: price,
        total: total
    }

    const addNewItem = () => {
        setItems([...items, itemList])
        // let newItems = items.push(itemList)
        // console.log(newItems)
        // setItems((e) => [...e, newItems])
        // setItems([...items, newItems])
    }

    // useEffect(() => {
    //     addNewItem()
    // }, [])



    return (

        <>
            <table className="w-full mt-8" style={{ borderSpacing: '9px', borderCollapse: 'separate' }}>
                <tbody>
                    <tr className="text-left text-gray-500 text-xs font-normal">
                        <th>Item Name</th>
                        <th className="">Qty</th>
                        <th className="">Price</th>
                        <th className="">Total</th>
                    </tr>

                    {
                        items.length !== 0 && items.map((e, i) =>
                            <tr className="" key={i}>
                                <td className="">
                                    <input className="border-gray-300  p-2 text-black-200 border rounded focus:border-purple-200 focus:outline-none" title="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </td>
                                <td className="">
                                    <input title="qty" className="border-gray-300   p-2 text-black-200 border rounded focus:border-purple-200 focus:outline-none" type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
                                </td>
                                <td className="">
                                    <input title="price" className="border-gray-300  p-2 text-black-200 border rounded focus:border-purple-200 focus:outline-none" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </td>
                                <td style={{ width: '10%' }}>{total}</td>
                                <td>
                                    <Trash size={16} />
                                </td>

                            </tr>
                        )
                    }
                </tbody>

            </table>
            <InvoiceButton label="Add" title="Add New Item" class="mt-4" action={() => { addNewItem() }} type="button" />
        </>
    )
}