import { IconPhotoScan} from "@tabler/icons-react";
import React, { useState } from "react";

export default function InputFileChat({ onChange, accept = ".jpg, .png, .jpeg" }) {
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }

        onChange(e);
    };

    return (
        <div>
            {preview && (
                <div className="absolute inset-0 flex justify-center">
                    <img src={preview} alt="Preview" className="max-h-80" />
                    <button
                        onClick={() => setPreview(null)}
                        className="ml-2 text-gray-500 hover:text-gray-900"
                    >
                        &times;
                    </button>
                </div>
            )}

            <label
            // className={`border border-fifth ${
            //     imagePreview
            //         ? "bg-secondary hover:bg-secondary text-white active:bg-secondary"
            //         : "file:text-dark hover:bg-secondary active:bg-secondary hover:text-white"
            // } transition duration-200 text-sm font-medium px-3 py-2 rounded text-dark cursor-pointer`}
            >
                <IconPhotoScan className="text-white" />
                <input
                    accept={accept}
                    onChange={handleChange}
                    type="file"
                    className="hidden"
                />
            </label>
        </div>
    );
}
