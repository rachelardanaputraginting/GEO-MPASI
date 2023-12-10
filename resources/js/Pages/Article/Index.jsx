import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import PrimaryButton from "@/Components/NavButton/PrimaryButton";
import Home from "@/Layouts/Home";
import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Artikel" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="ARTIKEL"
                        subtitle="Mari bersama-sama mencegah Growth Faltering di Indonesia"
                        text="Indonesia Sehat, Indonesia Hebat Indonesia Kuat"
                        placeholder="Masukkan Judul Artikel"
                        type="search"
                    ></Hero.HeroLeft>
                    <Hero.HeroRight></Hero.HeroRight>
                </Hero>
            </Container>
            {/* Hero End */}

            {/* Artikel Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Semua Artikel
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
                                <Link
                                    href={route("article.show", 1)}
                                    type="button"
                                    className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-secondary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-secondary focus:bg-secondary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Rincian
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Artikel End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
