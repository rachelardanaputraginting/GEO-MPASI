import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconEdit, IconMessage, IconPaperclip, IconToolsKitchen2 } from "@tabler/icons-react";

export default function Index({total_articles, total_groceries, total_messages}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Beranda" />

            {/* Hero Start */}
            <Container>
                <div className="flex flex-wrap w-full mt-12 justify-between">
                    <div className="w-full md:w-2/3 order-2 md:order-1">
                        <div className="w-full md:pr-8 h-full flex justify-between flex-col">
                            <div className="flex flex-col mt-16">
                                <h1 className="text-secondary font-medium text-xl md:text-2xl">
                                    Selamat Datang,{" "}
                                    <span className="font-bold text-primary">
                                        {" "}
                                        {auth.user.name}
                                    </span>
                                </h1>
                                <p className="font-medium text-dark text-xl">
                                    Mari bersama-sama mencegah Growth Faltering
                                    di Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Hero End */}

            {/* Dashboard Start */}
            <Container>
                <h4 className="w-full font-semibold mb-5 text-secondary text-3xl">
                    Dashboard
                </h4>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex gap-4 items-center p-2 border rounded border-fifth bg-white">
                        <IconToolsKitchen2
                            stroke={2}
                            color="white"
                            className="bg-primary rounded p-4"
                            size={72}
                        ></IconToolsKitchen2>
                        <div className="flex flex-col w-full justify-end">
                            <div className="text-md text-dark">
                                <span className="font-bold">{total_groceries}</span> Bahan Pangan
                            </div>
                            <div className="flex justify-end align-center">
                                <Link
                                    className="inline-flex items-center justify-center text-center p-2 bg-secondary rounded font-semibold text-white"
                                    href={route("admin.groceries.index")}
                                    type="button"
                                >
                                    <IconEdit size="20" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center p-2 border rounded border-fifth bg-white">
                        <IconPaperclip
                            stroke={2}
                            color="white"
                            className="bg-primary rounded p-4"
                            size={72}
                        ></IconPaperclip>
                        <div className="flex flex-col w-full justify-end">
                            <div className="text-md text-dark">
                                <span className="font-bold">{total_articles}</span> Artikel Saya
                            </div>
                            <div className="flex justify-end align-center">
                                <Link
                                    className="inline-flex items-center justify-center text-center p-2 bg-secondary rounded font-semibold text-white"
                                    href={route("admin.articles.index")}
                                    type="button"
                                >
                                    <IconEdit size="20" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center p-2 border rounded border-fifth bg-white">
                        <IconMessage
                            stroke={2}
                            color="white"
                            className="bg-primary rounded p-4"
                            size={72}
                        ></IconMessage>
                        <div className="flex flex-col w-full justify-end">
                            <div className="text-md text-dark">
                                <span className="font-bold">{total_messages}</span> Pesan Saya
                            </div>
                            <div className="flex justify-end align-center">
                                <Link
                                    className="inline-flex items-center justify-center text-center p-2 bg-secondary rounded font-semibold text-white"
                                    href={route("chat.index")}
                                    type="button"
                                >
                                    <IconEdit size="20" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Dashboard End */}
        </>
    );
}
Index.layout = (page) => <App children={page} />;
