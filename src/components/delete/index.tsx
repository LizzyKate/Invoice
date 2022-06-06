import { useParams } from "react-router-dom"



export default function DeleteInvoice() {
    const { id } = useParams()
    return (
        <section className="w-full bg-black-600 flex justify-center items-center h-screen absolute">
            <div className="w-1/4 bg-white rounded-md p-8">
                <h2 className="text-2xl text-black-200 font-bold">Confirm Deletion</h2>
                <p className="mt-3 text-xs text-gray-400">Are you sure you want to delete invoice #{id}? This action cannot be undone.</p>
                <div className="mt-4 flex justify-end space-x-4 items-center">
                    <button className="bg-gray-100 hover:bg-gray-300 w-20 text-gray-500 text-xs rounded-full px-2 py-3 font-bold">Cancel</button>
                    <button className="bg-orange-200 hover:bg-orange-500 w-20 text-xs text-white rounded-full px-2 py-3 font-bold">Delete</button>
                </div>
            </div>

        </section>
    )
}