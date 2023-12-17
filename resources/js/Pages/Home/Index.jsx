import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import MyModal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import Table from "@/Components/Table";
import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Index({articles}) {
    let [isOpen, setIsOpen] = useState(false);

    const [modalType, setModalType] = useState("");

    const [modalDetail, setModalDetail] = useState("");

    function openModalDetail(productSlug, type) {
        setIsOpen(true);
        setModalDetail("Bahan Pangan");
        setModalType(type);
    }

    return (
        <>
            <Head title="Beranda" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="GEO-MPASI"
                        subtitle="Mari bersama-sama mencegah Growth Faltering di Indonesia"
                        text="Location:"
                        location="Yogyakarta"
                        placeholder="Masukkan Lokasi Anda"
                        type="search"
                    ></Hero.HeroLeft>
                    <Hero.HeroRight></Hero.HeroRight>
                </Hero>
            </Container>
            {/* Hero End */}

            {/* Bahan Pangan Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Bahan Pangan
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/hero_home.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                Pisang
                            </h5>
                            <p className="text-dark font-light tracking-wide line-clamp-3">
                                Pisang adalah nama umum yang diberikan pada
                                tumbuhan terna berukuran besar dengan daun
                                memanjang dan besar
                            </p>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/app/hero_home.webp"
                                    className="w-11 h-11 rounded-full"
                                    alt=""
                                />
                                <div className="flex flex-col text-dark gap-0">
                                    <h6 className="text-sm font-medium">
                                        Lukman H
                                    </h6>
                                    <p className="font-light text-xs">
                                        Yogyakarta
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <PrimaryButton
                                    type="button"
                                    onClick={() =>
                                        openModalDetail("modal-1", "rincian")
                                    }
                                >
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/hero_home.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                Pisang
                            </h5>
                            <p className="text-dark font-light tracking-wide line-clamp-3">
                                Pisang adalah nama umum yang diberikan pada
                                tumbuhan terna berukuran besar dengan daun
                                memanjang dan besar
                            </p>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/app/hero_home.webp"
                                    className="w-11 h-11 rounded-full"
                                    alt=""
                                />
                                <div className="flex flex-col text-dark gap-0">
                                    <h6 className="text-sm font-medium">
                                        Lukman H
                                    </h6>
                                    <p className="font-light text-xs">
                                        Yogyakarta
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <PrimaryButton
                                    type="button"
                                    onClick={() =>
                                        openModalDetail("modal-1", "rincian")
                                    }
                                >
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/hero_home.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                Pisang
                            </h5>
                            <p className="text-dark font-light tracking-wide line-clamp-3">
                                Pisang adalah nama umum yang diberikan pada
                                tumbuhan terna berukuran besar dengan daun
                                memanjang dan besar
                            </p>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/app/hero_home.webp"
                                    className="w-11 h-11 rounded-full"
                                    alt=""
                                />
                                <div className="flex flex-col text-dark gap-0">
                                    <h6 className="text-sm font-medium">
                                        Lukman H
                                    </h6>
                                    <p className="font-light text-xs">
                                        Yogyakarta
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <PrimaryButton
                                    type="button"
                                    onClick={() =>
                                        openModalDetail("modal-1", "rincian")
                                    }
                                >
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/hero_home.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                Pisang
                            </h5>
                            <p className="text-dark font-light tracking-wide line-clamp-3">
                                Pisang adalah nama umum yang diberikan pada
                                tumbuhan terna berukuran besar dengan daun
                                memanjang dan besar
                            </p>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/app/hero_home.webp"
                                    className="w-11 h-11 rounded-full"
                                    alt=""
                                />
                                <div className="flex flex-col text-dark gap-0">
                                    <h6 className="text-sm font-medium">
                                        Lukman H
                                    </h6>
                                    <p className="font-light text-xs">
                                        Yogyakarta
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <PrimaryButton
                                    type="button"
                                    onClick={() =>
                                        openModalDetail("modal-1", "rincian")
                                    }
                                >
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Bahan Pangan End */}

            {/* Artikel Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Artikel Terbaru
                </h4>
                <div className="flex w-full flex-wrap sm:flex-nowrap items-center gap-4">
                    <div className="w-full sm:shadow sm:w-[550px] sm:h-[427px] bg-primary rounded p-8 justify-center gap-4 flex justify-between flex-col">
                        <div className="pt-20 w-auto space-y-4 sm:w-[350px] sm:h-[380px]">
                            <h3 className="font-bold text-secondary text-2xl">
                                Jelajahi
                            </h3>
                            <p className="text-white tracking-wide">
                                Pisang adalah nama umum yang diberikan pada
                                tumbuhan terna berukuran besar dengan daun
                                memanjang dan besar
                            </p>
                        </div>
                        <div className="flex justify-end items-end">
                            <PrimaryButton type="submit">
                                Selengkapnya
                            </PrimaryButton>
                        </div>
                    </div>
                    <div className="w-min scrolling-wrapper h-[420px] gap-4 flex overflow-scroll">
                        {articles.length > 0 ? (
                            <>
                                {articles.map((article, index) => (
                                    <div
                                        className="border w-[383px] h-[420px] p-[12px] rounded border-fifth"
                                        key={index}
                                    >
                                        <div className="w-[358px]">
                                            <img
                                                src={
                                                    article.picture
                                                        ? `/storage/${article.picture}`
                                                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                                }
                                                className="flex w-[358px] h-[180px] rounded"
                                                alt={article.name}
                                            />
                                        </div>
                                        <div className="py-2">
                                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                                {article.judul}
                                            </h5>
                                            <p className="text-dark font-light tracking-wide line-clamp-5">
                                                {article.description}
                                            </p>
                                        </div>
                                        <div className="pt-3 pb-1 flex justify-between flex-end">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="/images/app/hero_home.webp"
                                                    className="w-11 h-11 rounded-full"
                                                    alt=""
                                                />
                                                <div className="flex flex-col text-dark gap-0">
                                                    <h6 className="text-sm font-medium">
                                                        Lukman H
                                                    </h6>
                                                    <p className="font-light text-xs">
                                                        Yogyakarta
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <PrimaryButton type="submit">
                                                    Rincian
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </Container>

            {/* Modal */}
            <MyModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                size={`2/3`}
                type={modalType}
                title={modalDetail}
            >
                <div className="flex flex-wrap md:flex-nowrap mt-8 justify-between gap-4 items-start">
                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <img
                            src="/images/app/hero_home.webp"
                            alt=""
                            className="rounded"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <div>
                            <h5 className="text-2xl md:text-3xl py-2 text-dark font-semibold">
                                Pisang
                            </h5>
                            <p className="text-dark font-light text-lg tracking-wide line-clamp-3">
                                Pisang adalah nama umum yang diberikan pada
                                tumbuhan terna berukuran besar dengan daun
                                memanjang dan besar
                            </p>
                        </div>
                        <div className="mt-4 space-y-3">
                            <ul className="flex justify-between">
                                <li className="">Protein</li>
                                <li className="font-bold">10%</li>
                            </ul>
                            <ul className="flex justify-between">
                                <li className="">Karbohidrat</li>
                                <li className="font-bold">17%</li>
                            </ul>
                            <ul className="flex justify-between">
                                <li className="">Magnesium</li>
                                <li className="font-bold">40%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MyModal>
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
