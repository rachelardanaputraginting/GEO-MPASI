import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import PrimaryButton from "@/Components/NavButton/PrimaryButton";
import Home from "@/Layouts/Home";
import { Head, Link } from "@inertiajs/react";
import { IconMapPin } from "@tabler/icons-react";

export default function Index() {
    return (
        <>
            <Head title="Artikel" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="TEMUKAN DOKTER"
                        subtitle="Cari dan temukan Dokter, silahkan Berkonsultasi"
                        text="Indonesia Sehat, Indonesia Hebat Indonesia Kuat"
                        placeholder="Masukkan Nama Dokter"
                        type="search"
                    ></Hero.HeroLeft>
                    <Hero.HeroRight></Hero.HeroRight>
                </Hero>
            </Container>
            {/* Hero End */}

            {/* Artikel Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Semua Dokter
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/dokter_wanita.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                dr. Rachel Ginting
                            </h5>
                            <span
                                type="button"
                                className="inline-flex items-center justify-center text-center px-3 py-2 bg-primary rounded font-semibold text-[10px] text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Rs. Sejahtera
                            </span>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-1">
                               <IconMapPin className="text-dark/80" />
                                    <p className="font-light text-dark/80 text-xs">
                                        Yogyakarta
                                    </p>
                            </div>

                            <div className="flex">
                                <Link
                                    href=""
                                    type="button"
                                    className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Hubungi
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/dokter_wanita.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                dr. Rachel Ginting
                            </h5>
                            <span
                                type="button"
                                className="inline-flex items-center justify-center text-center px-3 py-2 bg-primary rounded font-semibold text-[10px] text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Rs. Sejahtera
                            </span>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-1">
                               <IconMapPin className="text-dark/80" />
                                    <p className="font-light text-dark/80 text-xs">
                                        Yogyakarta
                                    </p>
                            </div>

                            <div className="flex">
                                <Link
                                    href=""
                                    type="button"
                                    className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Hubungi
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/dokter_wanita.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                dr. Rachel Ginting
                            </h5>
                            <span
                                type="button"
                                className="inline-flex items-center justify-center text-center px-3 py-2 bg-primary rounded font-semibold text-[10px] text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Rs. Sejahtera
                            </span>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-1">
                               <IconMapPin className="text-dark/80" />
                                    <p className="font-light text-dark/80 text-xs">
                                        Yogyakarta
                                    </p>
                            </div>

                            <div className="flex">
                                <Link
                                    href=""
                                    type="button"
                                    className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Hubungi
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/dokter_wanita.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                dr. Rachel Ginting
                            </h5>
                            <span
                                type="button"
                                className="inline-flex items-center justify-center text-center px-3 py-2 bg-primary rounded font-semibold text-[10px] text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Rs. Sejahtera
                            </span>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-1">
                               <IconMapPin className="text-dark/80" />
                                    <p className="font-light text-dark/80 text-xs">
                                        Yogyakarta
                                    </p>
                            </div>

                            <div className="flex">
                                <Link
                                    href=""
                                    type="button"
                                    className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Hubungi
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth">
                        <div className="">
                            <img
                                src="/images/app/dokter_wanita.webp"
                                className="rounded aspect-video"
                                alt=""
                            />
                        </div>
                        <div className="py-2">
                            <h5 className="text-2xl py-2 font-semibold text-dark">
                                dr. Rachel Ginting
                            </h5>
                            <span
                                type="button"
                                className="inline-flex items-center justify-center text-center px-3 py-2 bg-primary rounded font-semibold text-[10px] text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Rs. Sejahtera
                            </span>
                        </div>
                        <div className="pt-3 pb-1 flex justify-between align-center">
                            <div className="flex items-center gap-1">
                               <IconMapPin className="text-dark/80" />
                                    <p className="font-light text-dark/80 text-xs">
                                        Yogyakarta
                                    </p>
                            </div>

                            <div className="flex">
                                <Link
                                    href=""
                                    type="button"
                                    className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Hubungi
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
