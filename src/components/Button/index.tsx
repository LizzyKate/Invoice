import { Plus } from "phosphor-react";


type buttonProps = {
    label?: 'New Invoice' | 'Add',
    action?: () => void,
    title: string,
    class?: string
}

export default function InvoiceButton(props: buttonProps) {
    return (
        <>
            {
                props.label === 'New Invoice' ?
                    <button className={`rounded-full flex justify-between items-center py-1 px-2 bg-purple-300 w-40 hover:bg-purple-200 `} onClick={() => props.action && props.action()}>
                        <span className="w-5 h-5 rounded-full flex justify-center items-center bg-white">
                            <Plus size={16} color="#7C5DFA" weight="bold" />
                        </span>
                        <span className="text-xs text-white tracking-negative font-bold">{props.title}</span>
                    </button>
                    : props.label === 'Add' ?
                        <button className={`bg-gray-100 flex justify-center space-x-2 items-center rouded-full w-80 px-2 py-1 text-gray-500 `}>
                            <span>
                                <Plus size={20} />
                            </span>
                            <span className="text-xs tracking-negative font-bold">{props.title}</span>
                        </button>
                        : <button className={`rounded-full px-2 py-1 font-bold ${props.class}`}>{props.title}</button>
            }
        </>
    )
}