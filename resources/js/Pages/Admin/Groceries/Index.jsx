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
    const { data: groceries, meta, links } = props.groceries;

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

    const [modalGrocery, setModalGrocery] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [grocerySlug, setGrocerySlug] = useState("");

    function openModalCategory(grocerySlug, type) {
        setIsOpen(true);
        setModalGrocery("Grocery");
        setModalType(type);
        setGrocerySlug(grocerySlug);
        if (grocerySlug) {
            const selectedCategory = groceries.find(
                (category) => category.slug === grocerySlug
            );

            setGrocerySlug(grocerySlug);
            setData({
                name: selectedCategory.name,
                icon: selectedCategory.icon,
            });
        } else {
            setGrocerySlug("");
            setData({
                name: "",
                icon: "",
            });
        }
    }

    function openToast(grocerySlug, title) {
        setIsToast(true);
        setToastTitle(title);
        setGrocerySlug(grocerySlug);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("admin.groceries.index"), {
            data,
            onSuccess: () => {
                toast.success("Grocery has been created!");
                setIsOpen(false);
                setData({ name: "", icon: "" });
            },
        });
    };

    // const onUpdate = (grocerySlug) => (e) => {
    //     e.preventDefault();
    //     put(route("admin.groceries.update", grocerySlug), {
    //         ...data,
    //         onSuccess: () => {
    //             toast.success("Grocery has been updated!"), setIsOpen(false);
    //         },
    //     });
    // };

    const onDelete = (grocerySlug) => {
        destroy(route("admin.groceries.destroy", grocerySlug), {
            onSuccess: () => {
                toast.success("Grocery has been deleted!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/groceries`,
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
            <Head title="Groceries" />
            <Container>
                {/* Start Groceries */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-dark">
                    Groceries
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
                        placeholder="Search groceries.."
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
                        {/* {groceries.length > 0 ? (
                            <>
                                {groceries.map((groceries, index) => (
                                    <tr
                                        className="bg-white border-b text-fifth"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>{groceries.name}</Table.Td>

                                        <Table.Td>
                                            {" "}
                                            <div
                                                className="w-10 h-10 p-2 border border-fifth rounded"
                                                dangerouslySetInnerHTML={{
                                                    __html: groceries.icon,
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
                                                            groceries.slug,
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
                            <tr className="bg-white border-b text-fifth text-center">
                                <Table.Td colSpan="4">No data</Table.Td>
                            </tr>
                        )} */}
                    </Table.Tbody>
                </Table>
                {/* {groceries.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-slate-500 mt-10">
                            Total Groceries:{" "}
                            <span className="font-bold">
                                {total_categories}
                            </span>{" "}
                        </p>
                    </div>
                )} */}
                {/* End Groceries */}

                {/* Modal */}
                {/* <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    size={`1/3`}
                    type={modalType}
                    title={modalGrocery}
                >
                    <form
                        onSubmit={
                            modalType == "create"
                                ? onSubmit
                                : onUpdate(grocerySlug)
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
                        <PrimaryButton onClick={() => onDelete(grocerySlug)}>
                            Yes
                        </PrimaryButton>
                    </div>
                </Toast> */}
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
