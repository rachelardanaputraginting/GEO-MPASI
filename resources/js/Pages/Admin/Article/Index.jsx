import ActionLink from "@/Components/ActionLink";
import ActionButton from "@/Components/Actionbutton";
import ArticleDetail from "@/Components/Articles/ArticleDetail";
import ArticleForm from "@/Components/Articles/ArticleForm";
import Container from "@/Components/Container";
import MyModal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Table from "@/Components/Table";
import TextInput from "@/Components/TextInput";
import Toast from "@/Components/Toast";
import App from "@/Layouts/App";
import { Head, useForm, router } from "@inertiajs/react";
import { IconArrowLeft, IconEye } from "@tabler/icons-react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Index({
    total_category_articles,
    category_articles,
    ...props
}) {
    const { data: articles, meta, links } = props.articles;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        delete: destroy,
        post,
        put,
        data,
        setData,
    } = useForm({
        title: "",
        user_id: "",
        category_article_id: "",
        description: "",
        picture: "",
    });

    let [isOpen, setIsOpen] = useState(false);
    let [isToast, setIsToast] = useState(false);

    const [modalArticle, setModalArticle] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [articleSlug, setArticleSlug] = useState("");

    function openModalArticle(articleSlug, type) {
        setIsOpen(true);
        setModalArticle("Article");
        setModalType(type);
        setArticleSlug(articleSlug);
        if (articleSlug) {
            const selectedCategory = articles.find(
                (article) => article.slug === articleSlug
            );

            setArticleSlug(articleSlug);
            setData({
                title: selectedCategory.title,
                category_article_id: selectedCategory.category_article,
                description: selectedCategory.description,
                description_full: selectedCategory.description_full,
                picture: selectedCategory.picture,
                created_at: selectedCategory.created_at,
            });
        } else {
            setArticleSlug("");
            setData({
                title: "",
                category_article_id: "",
                description: "",
                picture: "",
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
        router.post(
            `/admin/article`,
            {
                ...data,
                category_article_id: data.category_article_id.id,
            },
            {
                onSuccess: () => {
                    setIsOpen(false),
                        setData({
                            title: "",
                            category_article_id: "",
                            description: "",
                            picture: "",
                        }),
                        toast.success("Artikel Berhasil Ditambahkan!");
                },
            }
        );
    };

    const onUpdate = (articleSlug) => (e) => {
        e.preventDefault();
         router.post(
             `/admin/article/${articleSlug}`,
             {
                 _method: "put",
                 ...data,
                 category_article_id: data.category_article_id.id,
             },
             {
                 onSuccess: () => {
                     toast.success("Artikel Berhasil Diubah!"),
                         setIsOpen(false);
                 },
             }
         );
    };

    const onDelete = (articleSlug) => {
        destroy(route("admin.articles.destroy", articleSlug), {
            onSuccess: () => {
                toast.success("Artikel Berhasil Dihapus!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/article`,
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
                            className="bg-secondary"
                            onClick={() => openModalArticle("", "create")}
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
                            <Table.Th>Gambar</Table.Th>
                            <Table.Th>Judul</Table.Th>
                            <Table.Th>Author</Table.Th>
                            <Table.Th>Kategori</Table.Th>
                            <Table.Th>Deskripsi</Table.Th>
                            <Table.Th>Aksi</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {articles.length > 0 ? (
                            <>
                                {articles.map((article, index) => (
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
                                                    article.picture
                                                        ? article.picture
                                                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                                }
                                                className="rounded w-12 h-12"
                                            />
                                        </Table.Td>
                                        <Table.Td>{article.title}</Table.Td>
                                        <Table.Td>{article.user.name}</Table.Td>
                                        <Table.Td>
                                            {article.category_article.name}
                                        </Table.Td>
                                        <Table.Td className="w-[600px]">
                                            {article.description}
                                        </Table.Td>
                                        <Table.Td className="w-10">
                                            <div className="flex flex-nowrap gap-2">
                                                <ActionButton
                                                    className="w-8 h-8 bg-primary"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalArticle(
                                                            article.slug,
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
                                                        openModalArticle(
                                                            article.slug,
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
                                                            article.slug,
                                                            article.title
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
                {articles.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-dark mt-10">
                            Total Articles:{" "}
                            <span className="font-bold">
                                {total_category_articles}
                            </span>{" "}
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
                    title={modalArticle}
                >
                    {modalType == "detail" ? (
                        <>
                            <ArticleDetail {...{ data }} />
                        </>
                    ) : (
                        <>
                            <form
                                onSubmit={
                                    modalType == "create"
                                        ? onSubmit
                                        : onUpdate(articleSlug)
                                }
                                className="mt-6"
                            >
                                <ArticleForm {...{ data, setData }} />
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
                        <PrimaryButton onClick={() => onDelete(articleSlug)}>
                            Yes
                        </PrimaryButton>
                    </div>
                </Toast>
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
