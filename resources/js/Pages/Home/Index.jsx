import Container from "@/Components/Container";
import Footer from "@/Components/Footer";
import TextInput from "@/Components/TextInput";
import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Beranda" />

            {/* Hero Start */}
            <Container>
                <section>
                    <div className="flex flex-wrap w-full mt-8 justify-between">
                        <div className="w-full md:w-2/3 order-2 md:order-1">
                            <div className="w-full md:pr-8 h-full flex justify-between flex-col">
                                <div className="flex flex-col mt-16">
                                    <h1 className="text-secondary font-bold text-4xl">
                                        GEO-MPASI
                                    </h1>
                                    <p className="font-medium text-dark text-xl">
                                        Mari bersama-sama mencegah{" "}
                                        <span className="font-semibold">
                                            Growth Faltering{" "}
                                        </span>
                                        di{" "}
                                        <span className="font-semibold">
                                            Indonesia
                                        </span>
                                    </p>
                                </div>
                                <div className="md:pr-8">
                                    <h6 className="text-dark mb-2">
                                        Lokasi Anda:{" "}
                                        <span className="font-semibold">
                                            {" "}
                                            Yogyakarta
                                        </span>
                                    </h6>
                                    <TextInput
                                        type="text" placeholder="Masukkan Lokasi Anda"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full order-1 md:order-2 md:w-1/3 h-full">
                            <img
                                src="images/app/hero_home.webp"
                                className="rounded h-full w-full"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </Container>
            {/* Hero End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
