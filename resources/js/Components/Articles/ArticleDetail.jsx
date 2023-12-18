import React from 'react'

export default function ArticleDetail({ data, setData }) {

    return (
        <div className="flex flex-wrap mt-8 justify-between gap-4 items-start">
            <div className="w-full">
                <img
                    src={
                        data.picture
                            ? data.picture
                            : "https://flowbite.com/docs/images/blog/image-1.jpg"
                    }
                    alt={data.title}
                    className="rounded w-full aspect-video"
                />
            </div>
            <div className="w-full">
                <div>
                    <div className="mb-8">
                        <h5 className="text-2xl md:text-3xl pt-2 text-dark font-semibold">
                            {data.title}
                        </h5>
                        <span className="text-sm font-light text-dark">
                            {data.created_at}
                        </span>
                    </div>
                    <p className="text-dark font-light text-lg tracking-wide">
                        {data.description_full}
                    </p>
                </div>
            </div>
        </div>
    );
}
