import ActionLink from "@/Components/ActionLink";
import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import GroceryDetail from "@/Components/Groceries/GroceryDetail";
import GroceryForm from "@/Components/Groceries/GroceryForm";
import MyModal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Table from "@/Components/Table";
import TextInput from "@/Components/TextInput";
import Toast from "@/Components/Toast";
import App from "@/Layouts/App";
import { Head, useForm, router, Link } from "@inertiajs/react";
import { IconArrowLeft, IconEye } from "@tabler/icons-react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Index({ total_groceries, ...props }) {
    const { data: groceries, meta, links } = props.groceries;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        delete: destroy,
        post,
        put,
        data,
        setData,
    } = useForm({
        user_id: "",
        slug: "",
        name: "",
        description: "",
        indonesia_city_id: "",
        water: "",
        protein: "",
        fat: "",
        carbohydr: "",
        dietary: "",
        fiber: "",
        alcohol: "",
        pufa: "",
        cholesterol: "",
        vit_a: "",
        carotene: "",
        vit_e: "",
        vit_b1: "",
        vit_b2: "",
        vit_b6: "",
        total_fol_acid: "",
        vit_c: "",
        sodium: "",
        potassium: "",
        magnessium: "",
        phosphorus: "",
        iron: "",
        zink: "",
        picture: "",
    });

    let [isOpen, setIsOpen] = useState(false);
    let [isToast, setIsToast] = useState(false);

    const [modalGrocery, setModalGrocery] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [grocerySlug, setGrocerylug] = useState("");

    function openModalGrocery(grocerySlug, type) {
        setIsOpen(true);
        setModalGrocery("Bahan Pangan");
        setModalType(type);
        setGrocerylug(grocerySlug);
        if (grocerySlug) {
            const selectedGrocery = groceries.find(
                (grocery) => grocery.slug === grocerySlug
            );

            setGrocerylug(grocerySlug);
            setData({
                user_id: selectedGrocery.user_id,
                slug: selectedGrocery.slug,
                name: selectedGrocery.name,
                description: selectedGrocery.description,
                indonesia_city_id: selectedGrocery.indonesia_city,
                water: selectedGrocery.water,
                protein: selectedGrocery.protein,
                fat: selectedGrocery.fat,
                carbohydr: selectedGrocery.carbohydr,
                dietary: selectedGrocery.dietary,
                fiber: selectedGrocery.fiber,
                alcohol: selectedGrocery.alcohol,
                pufa: selectedGrocery.pufa,
                cholesterol: selectedGrocery.cholesterol,
                vit_a: selectedGrocery.vit_a,
                carotene: selectedGrocery.carotene,
                vit_e: selectedGrocery.vit_e,
                vit_b1: selectedGrocery.vit_b1,
                vit_b2: selectedGrocery.vit_b2,
                vit_b6: selectedGrocery.vit_b6,
                total_fol_acid: selectedGrocery.total_fol_acid,
                vit_c: selectedGrocery.vit_c,
                sodium: selectedGrocery.sodium,
                potassium: selectedGrocery.potassium,
                magnessium: selectedGrocery.magnessium,
                phosphorus: selectedGrocery.phosphorus,
                iron: selectedGrocery.iron,
                zink: selectedGrocery.zink,
                picture: selectedGrocery.picture,
            });
        } else {
            setGrocerylug("");
            setData({
                user_id: "",
                slug: "",
                name: "",
                description: "",
                indonesia_city_id: "",
                water: "",
                protein: "",
                fat: "",
                carbohydr: "",
                dietary: "",
                fiber: "",
                alcohol: "",
                pufa: "",
                cholesterol: "",
                vit_a: "",
                carotene: "",
                vit_e: "",
                vit_b1: "",
                vit_b2: "",
                vit_b6: "",
                total_fol_acid: "",
                vit_c: "",
                sodium: "",
                potassium: "",
                magnessium: "",
                phosphorus: "",
                iron: "",
                zink: "",
                picture: "",
            });
        }
    }

    function openToast(grocerySlug, title) {
        setIsToast(true);
        setToastTitle(title);
        setGrocerylug(grocerySlug);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        router.post(
            `/admin/grocery`,
            {
                ...data,
                indonesia_city_id: data.indonesia_city_id.id,
            },
            {
                onSuccess: () => {
                    setIsOpen(false),
                        setData({
                            user_id: "",
                            slug: "",
                            name: "",
                            description: "",
                            water: "",
                            protein: "",
                            fat: "",
                            carbohydr: "",
                            dietary: "",
                            fiber: "",
                            alcohol: "",
                            pufa: "",
                            cholesterol: "",
                            vit_a: "",
                            carotene: "",
                            vit_e: "",
                            vit_b1: "",
                            vit_b2: "",
                            vit_b6: "",
                            total_fol_acid: "",
                            vit_c: "",
                            sodium: "",
                            potassium: "",
                            magnessium: "",
                            phosphorus: "",
                            iron: "",
                            zink: "",
                            picture: "",
                        }),
                        toast.success("Bahan Pangan Berhasil Ditambahkan!");
                },
            }
        );
    };

    const onUpdate = (grocerySlug) => (e) => {
        e.preventDefault();
        router.post(
            `/admin/grocery/${grocerySlug}`,
            {
                _method: "put",
                ...data,
                indonesia_city_id: data.indonesia_city_id.id,
            },
            {
                onSuccess: () => {
                    toast.success("Bahan Pangan Berhasil Diubah!"),
                        setIsOpen(false);
                },
            }
        );
    };

    const onDelete = (grocerySlug) => {
        destroy(route("admin.groceries.destroy", grocerySlug), {
            onSuccess: () => {
                toast.success("Bahan Pangan Berhasil Dihapus!"),
                    setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/grocery`,
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
                {/* Start Articles */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-dark">
                    Groceries
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2">
                        <ActionLink href={route("dashboard.index")}>
                            <IconArrowLeft size={18} />
                        </ActionLink>
                        <ActionButton
                            className="bg-secondary"
                            onClick={() => openModalGrocery("", "create")}
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
                            <Table.Th>Gambar</Table.Th>
                            <Table.Th>Nama</Table.Th>
                            <Table.Th>Deskripsi</Table.Th>
                            <Table.Th>Author</Table.Th>
                            <Table.Th>Kota/Kabupaten</Table.Th>
                            <Table.Th>Aksi</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {groceries.length > 0 ? (
                            <>
                                {groceries.map((grocery, index) => (
                                    <tr
                                        className="bg-white border-b text-third"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>
                                            <img
                                                src={
                                                    grocery.picture
                                                        ? grocery.picture
                                                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                                }
                                                className="rounded w-12 h-12"
                                            />
                                        </Table.Td>
                                        <Table.Td>{grocery.name}</Table.Td>
                                        <Table.Td className="w-[600px]">
                                            {grocery.description}
                                        </Table.Td>
                                        <Table.Td>{grocery.user.name}</Table.Td>
                                        <Table.Td>
                                            {grocery.indonesia_city.name}
                                        </Table.Td>
                                        <Table.Td className="w-10">
                                            <div className="flex flex-nowrap gap-2">
                                                <ActionButton
                                                    className="w-8 h-8 bg-primary"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalGrocery(
                                                            grocery.slug,
                                                            "detail"
                                                        )
                                                    }
                                                >
                                                    <IconEye size={18} />
                                                </ActionButton>
                                                <ActionButton
                                                    className="w-8 h-8 bg-secondary"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalGrocery(
                                                            grocery.slug,
                                                            "edit"
                                                        )
                                                    }
                                                >
                                                    <IconEdit size={18} />
                                                </ActionButton>
                                                <ActionButton
                                                    className="w-8 h-8 bg-dark"
                                                    type="button"
                                                    onClick={() =>
                                                        openToast(
                                                            grocery.slug,
                                                            grocery.name
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
                        )}
                    </Table.Tbody>
                </Table>
                {groceries.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-dark mt-10">
                            Total Articles:{" "}
                            <span className="font-bold">{total_groceries}</span>{" "}
                        </p>
                    </div>
                )}
                {/* End Articles */}

                {/* Modal */}
                <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    size={`2/3`}
                    type={modalType}
                    title={modalGrocery}
                >
                    {modalType == "detail" ? (
                        <>
                            <GroceryDetail {...{ data }} />
                        </>
                    ) : (
                        <>
                            <form
                                onSubmit={
                                    modalType == "create"
                                        ? onSubmit
                                        : onUpdate(grocerySlug)
                                }
                                className="mt-6"
                            >
                                <GroceryForm {...{ data, setData }} />
                                <div className="flex justify-end gap-2">
                                    <SecondaryButton
                                        onClick={() => onCancelModal()}
                                    >
                                        Cancel
                                    </SecondaryButton>
                                    <PrimaryButton type="submit">
                                        {modalType == "create"
                                            ? "Create"
                                            : "Update"}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </>
                    )}
                </MyModal>

                {/* Toast */}
                <Toast
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
                </Toast>
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
