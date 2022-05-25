import email from '../../assets/img/email.png'

type detailProps = {
    detail: [] | { id: string, date: string, name: string, amount: string, status: string }[]
}

export default function InvoiceDetail(props: detailProps) {
    return (
        <>
            {
                props.detail.length === 0 ?
                    <div className="flex flex-col justify-center items-center mt-28">
                        <div>
                            <img src={email} alt="" />
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-xl text-center font-bold text-black-200'>There is nothing here</h2>
                            <p className='mt-6 text-xs text-center w-56 text-gray-400'>  Create an invoice by clicking the
                                New Invoice button and get started</p>
                        </div>
                    </div>
                    : props.detail.map((e, i: any) => {
                        return (
                            <div className="flex items-center p-7 mt-8 rounded-md bg-white justify-between" key={i}>
                                <p className="text-xs font-bold text-black-200"><span className="text-purple-100">#</span>{e.id}</p>
                                <p className="text-xs text-gray-400 font-normal">{e.date}</p>
                                <p className="text-gray-800 text-xs font-normal">{e.name}</p>
                                <p className="text-black-200 text-base font-normal">{e.amount}</p>
                                <div className={`${e.status === "Paid" ? "bg-green-200 text-green-100" : e.status === "Pending" ? "bg-orange-400 text-orange-300" : "bg-gray-900 text-black-500"} rounded-md font-bold flex space-x-2 justify-center items-center py-2 w-28`}>
                                    <div className={`w-2 h-2 rounded-full ${e.status === "Paid" ? "bg-green-100" : e.status === "Pending" ? "bg-orange-300 " : "bg-black-500 "}`}></div>
                                    <p>{e.status}</p>
                                </div>
                            </div>
                        )
                    })
            }

        </>
    )
}