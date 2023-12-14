import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function CategoryForm({ data, setData }) {
    const { errors } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-4">
                <InputLabel htmlFor="title" value="Name" />
                <TextInput name='title' id='title' className="w-full" onChange={onChange} value={data.title} />
                {errors.title ? <Error className='' value={errors.title} /> : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="icon" value="Icon" />
                <TextInput name='icon' id='icon' className="w-full" onChange={onChange} value={data.icon} />
                {errors.icon ? <Error className='' value={errors.icon} /> : null}
            </div>
        </>
    )
}
