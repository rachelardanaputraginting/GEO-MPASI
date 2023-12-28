import React, { useState } from 'react';

export default function InputFile({ picture, onChange, accept = '.jpg, .png, .jpeg' }) {
    const [imagePreview, setImagePreview] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
        onChange(event);
    };

    const renderImage = () => {
        if (imagePreview) {
            return <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover  border border-1 border-fifth rounded mb-2" />;
        }
        else {
            const placeholderImageUrl = picture ? picture : 'https://via.placeholder.com/150';
            return <img src={placeholderImageUrl} alt="Placeholder" className="w-32 h-32 object-cover rounded border border-1 border-fifth mb-2" />;
        }
    };

    return (
        <div className="flex flex-col items-center relative">
            {renderImage()}
            <label className={`border border-fifth ${imagePreview ? 'bg-secondary hover:bg-secondary text-white active:bg-secondary' : 'file:text-dark hover:bg-secondary active:bg-secondary hover:text-white'} transition duration-200 text-sm font-medium px-3 py-2 rounded text-dark cursor-pointer`}>
                Choose File
                <input
                    accept={accept}
                    onChange={handleFileChange}
                    type="file"
                    className="hidden"
                />
            </label>
            <span className='text-xs text-dark mt-1'>The maximum image size is 2MB</span>
        </div>
    );
}
