// /* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CaretDown, CaretUp } from 'phosphor-react'


export default function Dropdown(props: {
    label: any, options: {
        label: string, value: string
    }[],
    class?: string,
    handleSelect?: any
    full?: boolean
    error?: boolean
}) {

    const [active, setActive] = useState('')
    const handleClick = (value: string) => {
        setActive(value)
        props.handleSelect ? props.handleSelect(value) : console.log(value)
    }
    return (

        <Menu as="div" className={`relative inline-block text-left ${props.full ? 'w-full' : ''}`}>
            {({ open }) => (
                <>
                    <Menu.Button className={`${props.class} flex items-center text-xs text-black-200 font-normal`}>
                        {props.label}
                        {open ? (
                            <CaretUp size={16} className="ml-3" />
                        ) : <CaretDown size={16} className="ml-3" />
                        }

                    </Menu.Button>


                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full min-w-max rounded-md shadow-lg bg-white ring-opacity-5 focus:outline-none z-20" style={{
                            maxHeight: '296px',
                            overflow: 'scroll'
                        }}>
                            {props.options.map((d, i) => {
                                return (
                                    <Menu.Item key={i} >
                                        <span
                                            className={
                                                `block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100  ${active === d.value ? 'bg-gray-300' : ''}`
                                            }
                                            onClick={() => handleClick(d.value)}
                                        >
                                            <input type="checkbox" name={d.label} id="" />
                                            <label htmlFor={d.label} className="ml-2"> {d.label}</label>

                                        </span>
                                    </Menu.Item>
                                )
                            })}
                        </Menu.Items>
                    </Transition >
                </>
            )}

        </Menu >
    )
}



