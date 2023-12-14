import React from "react";
import InputLabel from "./InputLabel";
import Error from "./Error";
import { usePage } from "@inertiajs/react";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Select from "./Select";
import InputFile from "./InputFIle";

export default function ArticleForm({ data, setData }) {
    const { errors, category_articles } = usePage().props;

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
                <InputLabel htmlFor="title" value="Name" />
                <TextInput
                    name="title"
                    id="title"
                    className="w-full"
                    onChange={onChange}
                    value={data.title}
                />
                {errors.title ? (
                    <Error className="" value={errors.title} />
                ) : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="category_id" value="Category" />
                <Select
                    value={data.category_article_id}
                    data={category_articles}
                    className="w-full"
                    onChange={(e) => setData("category_article_id", e)}
                />
                {errors.category_article_id ? (
                    <Error className="" value={errors.category_article_id} />
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
        </>
    );
}
