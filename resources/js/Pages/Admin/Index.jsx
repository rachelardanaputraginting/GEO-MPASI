import Container from "@/Components/Container";
import Hero from "@/Components/Fragment/Hero";
import PrimaryButton from "@/Components/PrimaryButton";
import App from "@/Layouts/App";
import { Head, usePage } from "@inertiajs/react";
import { IconMessage, IconPaperclip, IconToolsKitchen2 } from "@tabler/icons-react";

export default function Index() {

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
                <div className="flex w-full flex-wrap md:flex-nowrap">
                    <div className="p-4 pl-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] ">
                        <div className="border rounded border-fifth">
                            <div className="flex justify-center h-64">
                                <IconToolsKitchen2
                                    stroke={1}
                                    className="aspect-ratio text-dark/90"
                                    size={240}
                                ></IconToolsKitchen2>

                            </div>
                            <div className="py-2">
                                <h5 className="text-2xl py-2 font-semibold text-center text-dark">
                                    Bahan Pangan
                                </h5>
                            </div>
                            <div className="p-3 flex justify-end align-center">
                                <PrimaryButton type="button">
                                    Kelola
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] ">
                        <div className="border rounded border-fifth">
                            <div className="flex justify-center h-64">
                                <IconPaperclip
                                    stroke={1}
                                    className="aspect-ratio text-dark/90"
                                    size={240}
                                ></IconPaperclip>

                            </div>
                            <div className="py-2">
                                <h5 className="text-2xl py-2 font-semibold text-center text-dark">
                                    Artikel
                                </h5>
                            </div>
                            <div className="p-3 flex justify-end align-center">
                                <PrimaryButton type="button">
                                    Kelola
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] ">
                        <div className="border rounded border-fifth">
                            <div className="flex justify-center h-64">
                                <IconMessage
                                    stroke={1}
                                    className="aspect-ratio text-dark/90"
                                    size={240}
                                ></IconMessage>

                            </div>
                            <div className="py-2">
                                <h5 className="text-2xl py-2 font-semibold text-center text-dark">
                                    Pesan Saya
                                </h5>
                            </div>
                            <div className="p-3 flex justify-end align-center">
                                <PrimaryButton type="button">
                                    Kelola
                                </PrimaryButton>
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
