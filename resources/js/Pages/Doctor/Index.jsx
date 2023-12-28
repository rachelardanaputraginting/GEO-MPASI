import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import Pagination from "@/Components/Pagination";
import Home from "@/Layouts/Home";
import { Head, Link, router } from "@inertiajs/react";
import { IconMapPin } from "@tabler/icons-react";
import { useState } from "react";

export default function Index({ ...props }) {
    const { data: doctors, meta, links } = props.doctors;
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/doctor`,
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
            <Head title="Doctor" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="TEMUKAN DOKTER"
                        subtitle="Cari dan temukan Dokter, silahkan Berkonsultasi"
                        text="Indonesia Sehat, Indonesia Hebat Indonesia Kuat"
                        placeholder="Masukkan Nama Dokter"
                        type="search"
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    ></Hero.HeroLeft>
                    <Hero.HeroRight></Hero.HeroRight>
                </Hero>
            </Container>
            {/* Hero End */}

            {/* Doctor Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Semua Dokter
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {doctors.length > 0 ? (
                        <>
                            {doctors.map((doctor, index) => (
                                <div
                                    key={index}
                                    className="border flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth"
                                >
                                    <div className="">
                                        <img
                                            src={
                                                doctor.picture
                                                    ? doctor.picture
                                                    : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                            }
                                            className="rounded aspect-video"
                                            alt={doctor.name}
                                        />
                                    </div>
                                    <div className="py-2">
                                        <h5 className="text-2xl py-2 font-semibold text-dark">
                                            {doctor.name}
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
                                                {doctor.address}
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <Link
                                                key={doctor.id}
                                                href={route(
                                                    "chat.show",
                                                    doctor.username
                                                )}
                                                type="button"
                                                className={`inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:bg-primary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${route().current("chat.show",doctor.username)? "text-dark": "text-dark"}
                                                `}
                                            >
                                                Hubungi
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <></>
                    )}
                </div>{" "}
                {doctors.length > 0 && (
                    <div className="flex w-full justify-center mt-6 items-center">
                        <Pagination meta={meta} links={links} />
                    </div>
                )}
            </Container>
            {/* Doctor End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
