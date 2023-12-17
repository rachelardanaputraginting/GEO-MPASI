import React from "react";

export default function GroceryDetail({ data, setData }) {
    console.log(data);
    return (
        <div className="flex flex-wrap md:flex-nowrap mt-8 justify-between gap-4 items-start">
            <div className="w-full md:w-1/2 lg:w-1/2">
                <img
                    src="/images/app/hero_home.webp"
                    alt=""
                    className="rounded"
                />
                <div>
                    <h5 className="text-2xl md:text-3xl py-2 text-dark font-semibold">
                        {data.name}
                    </h5>
                    <p className="text-dark font-light text-lg tracking-wide line-clamp-3">
                        {data.description}
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2">
                <div className="mt-1 space-y-2 text-xs">
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1 ">
                        <li className="">Water</li>
                        <li className="font-bold">{data.water}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Protein</li>
                        <li className="font-bold">{data.protein}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Fat</li>
                        <li className="font-bold">{data.fat}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Carbohydr</li>
                        <li className="font-bold">{data.carbohydr}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Dieatary</li>
                        <li className="font-bold">{data.dietary}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Fiber</li>
                        <li className="font-bold">{data.fiber}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Alcohol</li>
                        <li className="font-bold">{data.alcohol}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Pufa</li>
                        <li className="font-bold">{data.pufa}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Cholestrol</li>
                        <li className="font-bold">{data.cholesterol}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Vitamin A</li>
                        <li className="font-bold">{data.vit_a}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Carotene</li>
                        <li className="font-bold">{data.carotene}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Vitamin E</li>
                        <li className="font-bold">{data.vit_e}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Vitamin B1</li>
                        <li className="font-bold">{data.vit_b1}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Vitamin B2</li>
                        <li className="font-bold">{data.vit_b2}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Vitamin B6</li>
                        <li className="font-bold">{data.vit_b6}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Total Fol Acid</li>
                        <li className="font-bold">{data.total_fol_acid}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Vitamin C</li>
                        <li className="font-bold">{data.vit_c}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Sodium</li>
                        <li className="font-bold">{data.sodium}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Potassium</li>
                        <li className="font-bold">{data.potassium}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Magnessium</li>
                        <li className="font-bold">{data.magnessium}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Phosphorus</li>
                        <li className="font-bold">{data.phosphorus}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Iron</li>
                        <li className="font-bold">{data.iron}</li>
                    </ul>
                    <ul className="flex justify-between border-b border-fifth border-dotted pb-1">
                        <li className="">Zink</li>
                        <li className="font-bold">{data.zink}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
