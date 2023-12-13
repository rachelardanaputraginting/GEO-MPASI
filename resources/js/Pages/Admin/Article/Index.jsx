import ActionLink from "@/Components/ActionLink";
import ActionButton from "@/Components/Actionbutton";
import CategoryForm from "@/Components/CategoryForm";
import Container from "@/Components/Container";
import MyModal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Table from "@/Components/Table";
import TextInput from "@/Components/TextInput";
import Toast from "@/Components/Toast";
import App from "@/Layouts/App";
import { Head, useForm, router, Link } from "@inertiajs/react";
import { IconArrowLeft } from "@tabler/icons-react";
import {
    IconArrowLeftSquare,
    IconArrowRight,
    IconEdit,
    IconPlus,
    IconTrash,
} from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Index({ total_categories, ...props }) {
    const { data: articles, meta, links } = props.articles;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        delete: destroy,
        post,
        put,
        data,
        setData,
    } = useForm({
        name: "",
        icon: "",
    });

    let [isOpen, setIsOpen] = useState(false);
    let [isToast, setIsToast] = useState(false);

    const [modalArticle, setModalArticle] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [articleSlug, setArticleSlug] = useState("");

    function openModalCategory(articleSlug, type) {
        setIsOpen(true);
        setModalArticle("Article");
        setModalType(type);
        setArticleSlug(articleSlug);
        if (articleSlug) {
            const selectedCategory = articles.find(
                (category) => category.slug === articleSlug
            );

            setArticleSlug(articleSlug);
            setData({
                name: selectedCategory.name,
                icon: selectedCategory.icon,
            });
        } else {
            setArticleSlug("");
            setData({
                name: "",
                icon: "",
            });
        }
    }

    function openToast(articleSlug, title) {
        setIsToast(true);
        setToastTitle(title);
        setArticleSlug(articleSlug);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("admin.articles.index"), {
            data,
            onSuccess: () => {
                toast.success("Article has been created!");
                setIsOpen(false);
                setData({ name: "", icon: "" });
            },
        });
    };

    // const onUpdate = (articleSlug) => (e) => {
    //     e.preventDefault();
    //     put(route("admin.articles.update", articleSlug), {
    //         ...data,
    //         onSuccess: () => {
    //             toast.success("Article has been updated!"), setIsOpen(false);
    //         },
    //     });
    // };

    const onDelete = (articleSlug) => {
        destroy(route("admin.articles.destroy", articleSlug), {
            onSuccess: () => {
                toast.success("Article has been deleted!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/articles`,
            {
                search: e.target.value,
            },
            {
                preserveState: true,
            }
        );
    };
    return (
        <>
            <Head title="Articles" />
            <Container>
                {/* Start Articles */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-dark">
                    Articles
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2">
                        <ActionLink href={route("dashboard.index")}>
                            <IconArrowLeft size={18} />
                        </ActionLink>
                        <ActionButton
                            onClick={() => openModalCategory("", "create")}
                            type="button"
                        >
                            <IconPlus size={18} />
                        </ActionButton>
                    </div>
                    <TextInput
                        type="search"
                        className="w-3/4 md:w-1/4"
                        placeholder="Search articles.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-full"></div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Icon</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {/* {articles.length > 0 ? (
                            <>
                                {articles.map((articles, index) => (
                                    <tr
                                        className="bg-white border-b text-third"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>{articles.name}</Table.Td>

                                        <Table.Td>
                                            {" "}
                                            <div
                                                className="w-10 h-10 p-2 border border-third rounded"
                                                dangerouslySetInnerHTML={{
                                                    __html: articles.icon,
                                                }}
                                            />
                                        </Table.Td>
                                        <Table.Td className="w-10">
                                            <div className="flex flex-nowrap gap-2">
                                                <ActionButton
                                                    className="w-8 h-8 bg-secondary"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalCategory(
                                                            articles.slug,
                                                            "edit"
                                                        )
                                                    }
                                                >
                                                    <IconEdit size={18} />
                                                </ActionButton>
                                                <ActionButton
                                                    className="w-8 h-8 bg-red-500"
                                                    type="button"
                                                    onClick={() =>
                                                        openToast(
                                                            category.slug,
                                                            category.name
                                                        )
                                                    }
                                                >
                                                    <IconTrash size={18} />
                                                </ActionButton>
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            <tr className="bg-white border-b text-third text-center">
                                <Table.Td colSpan="4">No data</Table.Td>
                            </tr>
                        )} */}
                    </Table.Tbody>
                </Table>
                {/* {articles.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-dark mt-10">
                            Total Articles:{" "}
                            <span className="font-bold">
                                {total_categories}
                            </span>{" "}
                        </p>
                    </div>
                )} */}
                {/* End Articles */}

                {/* Modal */}
                {/* <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    size={`1/3`}
                    type={modalType}
                    title={modalArticle}
                >
                    <form
                        onSubmit={
                            modalType == "create"
                                ? onSubmit
                                : onUpdate(articleSlug)
                        }
                        className="mt-6"
                    >
                        <CategoryForm {...{ data, setData }} />
                        <div className="flex justify-end gap-2">
                            <SecondaryButton onClick={() => onCancelModal()}>
                                Cancel
                            </SecondaryButton>
                            <PrimaryButton type="submit">
                                {modalType == "create" ? "Create" : "Update"}
                            </PrimaryButton>
                        </div>
                    </form>
                </MyModal> */}

                {/* Toast */}
                {/* <Toast
                    isToast={isToast}
                    onClose={() => setIsToast(false)}
                    title={toastTitle}
                >
                    <div className="flex justify-end gap-2 justify-center">
                        <SecondaryButton onClick={() => onCancelToast()}>
                            No
                        </SecondaryButton>
                        <PrimaryButton onClick={() => onDelete(articleSlug)}>
                            Yes
                        </PrimaryButton>
                    </div>
                </Toast> */}
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
