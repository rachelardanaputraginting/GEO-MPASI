import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import PrimaryButton from "@/Components/PrimaryButton";
import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Index() {
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Bahan Pangan End */}

            {/* Bahan Pangan Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Artikel Terbaru
                </h4>
                <div className="flex items-center justify-center gap-4">
                    <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                <PrimaryButton type="submit">
                                    Rincian
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                    <PrimaryButton type="submit">
                                        Rincian
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className="border hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
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
                                    <PrimaryButton type="submit">
                                        Rincian
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Bahan Pangan End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
