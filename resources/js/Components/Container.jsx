import clsx from 'clsx'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={clsx(className, 'max-w-8xl mx-auto px-4 md:px-40 mt-16 mb-4 flex flex-wrap items-center')}>{children}</div>
    )
}
