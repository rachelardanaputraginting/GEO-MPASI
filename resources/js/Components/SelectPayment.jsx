import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'

export default function SelectPayment({ className = "", value, onChange, placeholder = 'Payment', ...props }) {
    const [isOpen, setIsOpen] = useState(false)

    const { data: data } = props.data

    const filteredData = data.filter(item => item.id !== value.id)

    return (
        <Listbox
            as="div"
            className="relative rounded"
            value={value}
            onChange={(e) => {
                onChange(e)
                setIsOpen(true)
            }}
            open={isOpen}
        >
            <Listbox.Button className="flex h-11 w-full items-center justify-between gap-x-2 rounded border border-gray-300 px-3 focus:outline-none">
                <span className="capitalize line-clamp-1">{name || value.name || placeholder }</span>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Listbox.Options className="z-50 absolute right-0 bottom-10 mt-1 max-h-[10rem] w-full overflow-y-auto rounded border border-gray-300 bg-white py-1 shadow-sm">
                    {filteredData.map((item) => (
                        <Listbox.Option key={item.id} value={item}>
                            {({ selected, active }) => (
                                <div
                                    className={clsx(
                                        'flex cursor-pointer text-sm items-center py-1.5 px-4',
                                        active && 'bg-gray-100',
                                        selected &&
                                        'bg-primary-50 font-semibold text-primary-600 hover:bg-primary-100'
                                    )}
                                >
                                    <span className="capitalize line-clamp-1">   {item.id === value.id ? value.name : item.name}</span>
                                </div>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}
