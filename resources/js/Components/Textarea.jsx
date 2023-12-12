import React from 'react';

export default function Textarea({ ...props }) {
    return (
        <textarea
            className="border-fifth focus:border-fifth bg-third focus:bg-white focus:ring-fifth rounded-md shadow-sm w-full"
            {...props}
        />
    );
}
