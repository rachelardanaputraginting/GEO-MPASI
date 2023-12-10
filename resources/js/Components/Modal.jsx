import { Dialog, Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { Fragment } from 'react'

export default function MyModal({ isOpen, onClose, size, title, children, type }) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`w-full sm:w-${size} transform overflow-hidden rounded bg-white mt-16 p-6 text-left align-middle shadow-xl transition-all`}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-slate-700 font-medium leading-6 mt-4 text-gray-700"
                                    >
                                        Form {type == "create" ? "Create" : type === "delete" ? "Delete" : "Edit"} {title}
                                    </Dialog.Title>
                                    <button className='absolute right-2 top-2 py-2 px-2 bg-transparent text-slate-500' onClick={onClose}><IconX /></button>
                                    <div className="mt-2">
                                        {children}
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
