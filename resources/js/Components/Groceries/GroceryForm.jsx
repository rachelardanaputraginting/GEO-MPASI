import React from "react";
import InputLabel from "../InputLabel";
import Error from "../Error";
import { usePage } from "@inertiajs/react";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import InputFile from "../InputFIle";
import InputLabelBottom from "../InputLabel copy";
import Select from "react-select";

export default function GroceryForm({ data, setData }) {
    const { errors, cities } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            <div className="mb-6">
                <InputFile
                    picture={data.picture}
                    name="picture"
                    id="picture"
                    className="w-full"
                    onChange={(e) => setData("picture", e.target.files[0])}
                />
                {errors.picture ? (
                    <Error className="" value={errors.picture} />
                ) : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    name="name"
                    id="name"
                    className="w-full"
                    onChange={onChange}
                    value={data.name}
                    placeholder="2 mg"
                />
                {errors.name ? (
                    <Error className="" value={errors.name} />
                ) : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="description" value="Deskripsi" />
                <Textarea
                    rows="6"
                    name="description"
                    id="description"
                    onChange={(e) => setData("description", e.target.value)}
                    value={data.description}
                />
                {errors.description ? (
                    <Error className="" value={errors.description} />
                ) : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="indonesia_city_id" value={`Propinsi : ${data.indonesia_city_id.name}`} />
                <Select
                    options={cities.map((city) => ({
                        value: city.id,
                        label: city.name,
                    }))}
                    onChange={(selectedOption) =>
                        setData("city_id", selectedOption.value)
                    }
                    name="indonesia_city_id"
                    className="border-fifth bg-third text-dark focus:text-dark focus:border-fifth border-1 focus:ring-fifth focus:bg-white rounded-md"
                />
                {errors.city_id ? (
                    <Error className="" value={errors.city_id} />
                ) : null}
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="water" value="Water" />
                        <TextInput
                            name="water"
                            id="water"
                            className="w-full"
                            onChange={onChange}
                            value={data.water}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="water"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.water ? (
                            <Error className="" value={errors.water} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="protein" value="Protein" />
                        <TextInput
                            name="protein"
                            id="protein"
                            className="w-full"
                            onChange={onChange}
                            value={data.protein}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="protein"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.protein ? (
                            <Error className="" value={errors.protein} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="fat" value="Fat" />
                        <TextInput
                            name="fat"
                            id="fat"
                            className="w-full"
                            onChange={onChange}
                            value={data.fat}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="fat"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.fat ? (
                            <Error className="" value={errors.fat} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="carbohydr" value="Carbohydr" />
                        <TextInput
                            name="carbohydr"
                            id="carbohydr"
                            className="w-full"
                            onChange={onChange}
                            value={data.carbohydr}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="carbohydr"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.carbohydr ? (
                            <Error className="" value={errors.carbohydr} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="dietary" value="Dietary" />
                        <TextInput
                            name="dietary"
                            id="dietary"
                            className="w-full"
                            onChange={onChange}
                            value={data.dietary}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="dietary"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.dietary ? (
                            <Error className="" value={errors.dietary} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="fiber" value="Fiber" />
                        <TextInput
                            name="fiber"
                            id="fiber"
                            className="w-full"
                            onChange={onChange}
                            value={data.fiber}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="fiber"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.fiber ? (
                            <Error className="" value={errors.fiber} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="alcohol" value="Alcohol" />
                        <TextInput
                            name="alcohol"
                            id="alcohol"
                            className="w-full"
                            onChange={onChange}
                            value={data.alcohol}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="alcohol"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.alcohol ? (
                            <Error className="" value={errors.alcohol} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="Pufa" value="Pufa" />
                        <TextInput
                            name="pufa"
                            id="pufa"
                            className="w-full"
                            onChange={onChange}
                            value={data.pufa}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="pufa"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.pufa ? (
                            <Error className="" value={errors.pufa} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="cholesterol" value="Cholesterol" />
                        <TextInput
                            name="cholesterol"
                            id="cholesterol"
                            className="w-full"
                            onChange={onChange}
                            value={data.cholesterol}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="cholesterol"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.cholesterol ? (
                            <Error className="" value={errors.cholesterol} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="vit_a" value="Vitamin A" />
                        <TextInput
                            name="vit_a"
                            id="vit_a"
                            className="w-full"
                            onChange={onChange}
                            value={data.vit_a}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="vit_a"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.vit_a ? (
                            <Error className="" value={errors.vit_a} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="carotene" value="Carotene" />
                        <TextInput
                            name="carotene"
                            id="carotene"
                            className="w-full"
                            onChange={onChange}
                            value={data.carotene}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="carotene"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.carotene ? (
                            <Error className="" value={errors.carotene} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="vit_e" value="Vitamin E" />
                        <TextInput
                            name="vit_e"
                            id="vit_e"
                            className="w-full"
                            onChange={onChange}
                            value={data.vit_e}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="vit_e"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.vit_e ? (
                            <Error className="" value={errors.vit_e} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="vit_b1" value="Vitamin B1" />
                        <TextInput
                            name="vit_b1"
                            id="vit_b1"
                            className="w-full"
                            onChange={onChange}
                            value={data.vit_b1}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="vit_b1"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.vit_b1 ? (
                            <Error className="" value={errors.vit_b1} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="vit_b2" value="Vitamin B2" />
                        <TextInput
                            name="vit_b2"
                            id="vit_b2"
                            className="w-full"
                            onChange={onChange}
                            value={data.vit_b2}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="vit_b2"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.vit_b2 ? (
                            <Error className="" value={errors.vit_b2} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="vit_b6" value="Vitamin B6" />
                        <TextInput
                            name="vit_b6"
                            id="vit_b6"
                            className="w-full"
                            onChange={onChange}
                            value={data.vit_b6}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="vit_b6"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.vit_b6 ? (
                            <Error className="" value={errors.vit_b6} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="total_fol_acid"
                            value="Total Fol Acid"
                        />
                        <TextInput
                            name="total_fol_acid"
                            id="total_fol_acid"
                            className="w-full"
                            onChange={onChange}
                            value={data.total_fol_acid}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="total_fol_acid"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.total_fol_acid ? (
                            <Error className="" value={errors.total_fol_acid} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="vit_c" value="Vitamin C" />
                        <TextInput
                            name="vit_c"
                            id="vit_c"
                            className="w-full"
                            onChange={onChange}
                            value={data.vit_c}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="vit_c"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.vit_c ? (
                            <Error className="" value={errors.vit_c} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="sodium" value="Sodium" />
                        <TextInput
                            name="sodium"
                            id="sodium"
                            className="w-full"
                            onChange={onChange}
                            value={data.sodium}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="sodium"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.sodium ? (
                            <Error className="" value={errors.sodium} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="potassium" value="Potassium" />
                        <TextInput
                            name="potassium"
                            id="potassium"
                            className="w-full"
                            onChange={onChange}
                            value={data.potassium}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="potassium"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.potassium ? (
                            <Error className="" value={errors.potassium} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="magnessium" value="Magnessium" />
                        <TextInput
                            name="magnessium"
                            id="magnessium"
                            className="w-full"
                            onChange={onChange}
                            value={data.magnessium}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="magnessium"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.magnessium ? (
                            <Error className="" value={errors.magnessium} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <InputLabel htmlFor="phosphorus" value="Phosphorus" />
                        <TextInput
                            name="phosphorus"
                            id="phosphorus"
                            className="w-full"
                            onChange={onChange}
                            value={data.phosphorus}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="phosphorus"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.phosphorus ? (
                            <Error className="" value={errors.phosphorus} />
                        ) : null}
                    </div>
                    <div>
                        <InputLabel htmlFor="iron" value="Iron" />
                        <TextInput
                            name="iron"
                            id="iron"
                            className="w-full"
                            onChange={onChange}
                            value={data.iron}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="iron"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.iron ? (
                            <Error className="" value={errors.iron} />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div className="cols-start">
                        <InputLabel htmlFor="zink" value="Zink" />
                        <TextInput
                            name="zink"
                            id="zink"
                            className="w-full"
                            onChange={onChange}
                            value={data.zink}
                            placeholder="2 mg"
                        />
                        <InputLabelBottom
                            htmlFor="zink"
                            value="g/mg"
                            className="text-end text-sm font-light"
                        />
                        {errors.zink ? (
                            <Error className="" value={errors.zink} />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}
